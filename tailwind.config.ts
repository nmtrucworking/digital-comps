import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'headline-md': ['clamp(1.5rem, 2vw, 2rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-bold': ['0.875rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
