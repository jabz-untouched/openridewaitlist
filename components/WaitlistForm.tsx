'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { useStore } from '@/store/useStore';
import { WaitlistFormData, UserRole } from '@/types';
import { CheckCircle, Loader2, Send, ShieldCheck } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email'),
  city: z.string().min(2, 'Please enter your city'),
  role: z.enum(['rider', 'driver', 'both'] as const),
  commuteRoute: z.string().min(5, 'Please describe your general route'),
});

const WaitlistForm: React.FC = () => {
  const { isSubmitting, isSuccess, error, submitWaitlist } = useStore();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<WaitlistFormData>({
    resolver: zodResolver(schema),
    defaultValues: { role: 'rider' }
  });

  const selectedRole = watch('role');

  const onSubmit = (data: WaitlistFormData) => {
    submitWaitlist(data);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-2xl text-center border-t-8 border-brand-orange"
      >
        <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-brand-orange" />
        </div>
        <h3 className="text-3xl font-black mb-3">Welcome Aboard!</h3>
        <p className="text-gray-600 mb-6">
          You&apos;re now on the list for Nigeria&apos;s most secured commute network. We&apos;ll reach out once we launch in your route.
        </p>
        <div className="p-4 bg-brand-light rounded-xl flex items-center gap-3 text-left">
           <ShieldCheck className="w-10 h-10 text-brand-orange flex-shrink-0" />
           <p className="text-xs font-semibold text-gray-500">Your information is being verified against our professional network safety standards.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-black mb-1">Join the community</h3>
        <p className="text-gray-500 text-sm font-medium">Secured. Cheap. Professional.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
          <input 
            {...register('name')}
            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-100'}`}
            placeholder="e.g. Adekunle Chidi"
          />
          {errors.name && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Work Email</label>
          <input 
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-100'}`}
            placeholder="work@company.com.ng"
          />
          {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">City</label>
          <input 
            {...register('city')}
            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all ${errors.city ? 'border-red-500' : 'border-gray-100'}`}
            placeholder="e.g. Lagos, Abuja, Port Harcourt"
          />
          {errors.city && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">My Ride Status</label>
          <div className="grid grid-cols-3 gap-2">
            {(['rider', 'driver', 'both'] as UserRole[]).map((r) => (
              <label 
                key={r}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border cursor-pointer transition-all duration-300 ${selectedRole === r ? 'bg-brand-black text-white border-brand-black' : 'bg-brand-light text-gray-600 border-gray-100 hover:border-brand-orange'}`}
              >
                <input type="radio" {...register('role')} value={r} className="hidden" />
                <span className="capitalize text-[11px] font-bold">{r}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Commute Route</label>
          <textarea 
            {...register('commuteRoute')}
            rows={2}
            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-all ${errors.commuteRoute ? 'border-red-500' : 'border-gray-100'}`}
            placeholder="e.g. Ikorodu to Victoria Island"
          />
          {errors.commuteRoute && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.commuteRoute.message}</p>}
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-orange text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-orange/20"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Request Secured Access
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-2 font-medium">
          By joining, you agree to workplace verification for security.
        </p>
      </form>
    </motion.div>
  );
};

export default WaitlistForm;
