import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import libcss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    react(),
    libcss()
  ],
  build: {
    // cssCodeSplit:true,
    lib: {
      entry: path.resolve(__dirname, 'lib/main.tsx'),
      formats:['es'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react',"react-dom","@types/node"],
    }
  }
})
