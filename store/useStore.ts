
import { create } from 'zustand';
import { StoreState, WaitlistFormData } from '../types';
import { api } from '../services/api';

export const useStore = create<StoreState>((set) => ({
  isSubmitting: false,
  isSuccess: false,
  error: null,

  submitWaitlist: async (data: WaitlistFormData) => {
    set({ isSubmitting: true, error: null });
    try {
      const response = await api.post('/waitlist', {
        fullName: data.name,
        email: data.email,
        city: data.city,
        role: data.role,
        commuteRoute: data.commuteRoute,
      });
      
      if (response.status === 201) {
        set({ isSubmitting: false, isSuccess: true });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || 'Something went wrong. Please try again.';
      set({ isSubmitting: false, error: errorMessage });
    }
  },

  resetStatus: () => set({ isSuccess: false, error: null, isSubmitting: false })
}));
