'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';
import Features from '@/components/Features';
import AIPrediction from '@/components/AIPrediction';
import { motion } from 'motion/react';
import { Menu, ChevronRight, ShieldCheck, Banknote } from 'lucide-react';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-brand-light" />
});

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/70 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Image 
            src="/openride-logo.png" 
            alt="openride logo" 
            width={180} 
            height={60}
            priority
            className="h-auto w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#" className="hover:text-brand-orange transition-colors">How it works</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Security</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Cost Benefit</a>
          <button className="bg-brand-black text-white px-5 py-2 rounded-full hover:bg-brand-orange transition-all duration-300">
            Get App
          </button>
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="relative h-screen flex flex-col items-center justify-center pt-20 px-6 bg-brand-light overflow-hidden">
          <ThreeScene />
          
          <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold mb-4 uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                  </span>
                  Nigeria&apos;s Safest Commuter Network
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
                  Arrive Secured. <br />
                  <span className="text-brand-orange">Pay Less.</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed font-medium">
                  The most cost-efficient ride-sharing platform in Nigeria. We match professionals with car-owning office workers already on your route. 
                  <span className="block mt-2 text-brand-black font-bold">Cheaper rides, better security, zero violence.</span>
                </p>
                
                <AIPrediction />
              </motion.div>
              
              <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Verified Workplace IDs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-brand-orange" />
                  <span>40% Lower Costs</span>
                </div>
              </div>
            </div>

            <div className="relative">
               <WaitlistForm />
               <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-brand-orange/10 blur-3xl rounded-full" />
               <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-black/5 blur-3xl rounded-full" />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Built for Nigeria</span>
            <div className="w-px h-8 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>
        </div>

        <Features />

        {/* Safety & Cost Detail Section */}
        <section className="py-24 bg-brand-light border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold tracking-tight">Why Openride is Different</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-brand-orange">
                    <h4 className="font-bold text-xl mb-2">Maximum Security</h4>
                    <p className="text-gray-600">Unlike traditional ride-hailing, we know exactly who is in the car. Every user must verify their workplace ID and business registration. By connecting known professionals, we eliminate the risk of kidnappings and violence.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-brand-orange">
                    <h4 className="font-bold text-xl mb-2">True Cost-Efficiency</h4>
                    <p className="text-gray-600">Our drivers aren&apos;t full-time taxi drivers. They are professionals with main sources of income who share their ride to offset fuel costs. This means significantly lower fares for you and extra cash for them.</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 bg-brand-gray flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="inline-block p-4 bg-brand-orange/20 rounded-full mb-6">
                      <ShieldCheck className="w-16 h-16 text-brand-orange" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 italic">&ldquo;Secured by Identity&rdquo;</h3>
                    <p className="text-gray-400 text-sm">Real-time route tracking shared with your employer and emergency contacts for every single trip.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-black text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Join Nigeria&apos;s First <br /> Professional Ride-Share.</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-full transition-all flex items-center gap-2 group text-xl shadow-lg shadow-brand-orange/20">
                Get Early Access
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:bg-white/10 px-12 py-5 rounded-full font-bold transition-all text-xl">
                Partner with Us
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                 <div className="w-3 h-5 border-l border-r border-white relative opacity-50" />
              </div>
              <span className="text-xl font-black">openride</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              Connecting Nigerian professionals for a safer, cheaper, and faster commute. Built by Nigerians, for the Nigerian workforce.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold">Security</h5>
            <ul className="text-gray-500 text-sm space-y-2">
              <li><a href="#" className="hover:text-brand-orange">ID Verification</a></li>
              <li><a href="#" className="hover:text-brand-orange">Employer Sync</a></li>
              <li><a href="#" className="hover:text-brand-orange">Emergency Response</a></li>
              <li><a href="#" className="hover:text-brand-orange">Anti-Assault Tech</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold">Company</h5>
            <ul className="text-gray-500 text-sm space-y-2">
              <li><a href="#" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange">Lagos Operations</a></li>
              <li><a href="#" className="hover:text-brand-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-xs font-medium text-center md:text-left">
          <p>© 2025 Openride Technologies Nigeria. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
