'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Fingerprint, Banknote, Timer } from 'lucide-react';

const featureList = [
  {
    icon: Fingerprint,
    title: "Verified Identities",
    desc: "Every commuter's ID, workplace location, and business information is verified. No anonymous rides."
  },
  {
    icon: Banknote,
    title: "Unbeatable Rates",
    desc: "Drivers already have main incomes; this is just extra cash for them. You pay significantly less than any other app."
  },
  {
    icon: ShieldAlert,
    title: "Anti-Violence Tech",
    desc: "Drastically reduced probability of assaults or kidnappings through professional network matching."
  },
  {
    icon: Timer,
    title: "Express Routes",
    desc: "Matched specifically for office workers heading to the same hub. Fast, direct, and highly efficient."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Built for Total Peace of Mind</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We&apos;ve redesigned ride-sharing for the Nigerian professional. Safety isn&apos;t an option; it&apos;s the foundation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-brand-light border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300">
                <f.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
