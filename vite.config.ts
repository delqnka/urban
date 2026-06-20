import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/booking-island.tsx'),
      name: 'UrbanBookingIsland',
      fileName: () => 'booking.js',
      formats: ['es']
    },
    rollupOptions: {
      output: { inlineDynamicImports: true }
    }
  }
});
