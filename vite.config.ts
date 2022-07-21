import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.vue'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#2A85FF',
          'link-color': '#2A85FF',
          'heading-color': '#1A1D1F',
          'text-color': '#33383F',
          'text-color-secondary': '#9A9FA5',
          'border-radius-base': '12px',
          'success-color': '#83BF6E',
          'warning-color': '#FFD88D',
          'error-color': '#FF6A55',
        },
      },
    },
  },
});
