import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
//import dotenv from 'dotenv';

//dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
