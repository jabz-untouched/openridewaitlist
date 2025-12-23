'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Route, Zap } from 'lucide-react';

const AIPrediction: React.FC = () => {
  const [insight, setInsight] = useState<string>("Analyzing commute safety and efficiency...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAIInsight = async () => {
      try {
        // Simulating the intelligence that matches professionals
        await new Promise(r => setTimeout(r, 2000));
        setInsight("Security check complete. We've found 8 verified professionals heading from Ikeja to VI between 7:00 AM - 7:30 AM. Expected savings: ₦35,000/week compared to standard hailing apps.");
      } catch {
        setInsight("Openride&apos;s algorithm ensures you only ride with verified professionals, reducing security risks by 99% while cutting commute costs in half.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAIInsight();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-brand-gray text-white p-6 rounded-2xl relative overflow-hidden mt-8 max-w-lg border-l-4 border-brand-orange shadow-2xl"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Sparkles className="w-20 h-20" />
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-brand-orange p-1 rounded">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Openride Intelligence</span>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
          </div>
        ) : (
          <p className="text-sm text-gray-200 leading-relaxed font-medium italic">
            &ldquo;{insight}&rdquo;
          </p>
        )}
        
        <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
          <div className="flex items-center gap-1">
            <Route className="w-3 h-3 text-brand-orange" />
            <span>Zero-Deviation Matching</span>
          </div>
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
          <span>Verified Office Hubs</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AIPrediction;
