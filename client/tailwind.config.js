import tailwindcss from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    lineClamp,
    // ...
  ],
};
