import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'headline-md': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['clamp(0.9375rem, 1.2vw, 1.0625rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['0.9375rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-bold': ['0.875rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'text-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'text-gradient': 'text-gradient 4s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
