
export type UserRole = 'rider' | 'driver' | 'both';

export interface WaitlistFormData {
  name: string;
  email: string;
  city: string;
  role: UserRole;
  commuteRoute: string;
}

export interface StoreState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitWaitlist: (data: WaitlistFormData) => Promise<void>;
  resetStatus: () => void;
}
