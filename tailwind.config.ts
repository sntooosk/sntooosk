import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif'],
      },
      colors: {
        graphite: '#070A0F',
        panel: 'rgba(14, 20, 32, 0.72)',
        cyanGlow: '#37D5FF',
        blueNeon: '#4F8CFF',
      },
      boxShadow: {
        glow: '0 0 40px rgba(55, 213, 255, 0.18)',
        card: '0 24px 80px rgba(0, 0, 0, 0.38)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at center, rgba(79, 140, 255, 0.18), transparent 35%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
