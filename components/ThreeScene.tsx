'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Road = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Simulate movement
      meshRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    }
  });

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 100]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Road Lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, 0]}>
        <planeGeometry args={[0.1, 100]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const Car = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 - 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, -0.5, 2]}>
        {/* Simple stylized car body */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1, 0.4, 2]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        <mesh position={[0, 0.7, -0.2]}>
          <boxGeometry args={[0.8, 0.3, 1]} />
          <meshStandardMaterial color="#fff" transparent opacity={0.6} />
        </mesh>
        {/* Wheels */}
        {[[-0.5, 0.1, 0.6], [0.5, 0.1, 0.6], [-0.5, 0.1, -0.6], [0.5, 0.1, -0.6]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
            <meshStandardMaterial color="#000" />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#f97316" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Road />
        <Car />
        <fog attach="fog" args={['#f8fafc', 5, 15]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
