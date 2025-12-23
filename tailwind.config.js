/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Prevent critical classes from being purged
    'min-h-screen', 'flex', 'items-center', 'justify-center', 'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-12',
    'px-3', 'px-5', 'px-6', 'py-1', 'py-2', 'py-4', 'py-24',
    'text-xs', 'text-sm', 'text-lg', 'text-2xl', 'text-3xl', 'text-5xl', 'text-7xl',
    'font-bold', 'font-black', 'font-semibold', 'font-medium',
    'bg-brand-light', 'bg-brand-orange', 'bg-brand-black', 'bg-white',
    'text-brand-orange', 'text-brand-black', 'text-gray-600', 'text-gray-700', 'text-white',
    'rounded-full', 'rounded-2xl', 'rounded-lg',
    'border', 'border-gray-100', 'border-brand-orange',
    'hover:text-brand-orange', 'hover:bg-brand-orange', 'hover:border-brand-orange',
    'transition-colors', 'transition-all',
    'duration-300', 'duration-500',
    'w-full', 'h-screen', 'inset-0',
    'fixed', 'relative', 'absolute',
    'top-0', 'left-0', 'right-0', 'bottom-0',
    'z-0', 'z-10', 'z-50',
    'backdrop-blur-md', 'selection:bg-brand-orange', 'selection:text-white',
    'lg:grid-cols-2', 'lg:text-7xl', 'md:flex', 'md:grid-cols-2', 'md:hidden',
    'space-y-8', 'space-y-4',
    'leading-none', 'leading-relaxed',
    'tracking-tighter', 'tracking-tight', 'tracking-wider',
    'max-w-lg', 'max-w-2xl', 'max-w-md',
    'mb-4', 'mb-6', 'mb-8', 'mb-16',
    'mt-2', 'mt-4',
    'block', 'inline-flex',
    'opacity-0', 'opacity-1', 'opacity-75',
    'translate-x-0', '-translate-x-1/2', '-translate-y-1/2',
    'rotate-0',
    'scale-100',
    'container', 'mx-auto',
    'grid', 'md:grid-cols-4', 'lg:grid-cols-4',
    'animate-ping',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          black: '#000000',
          gray: '#1a1a1a',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
