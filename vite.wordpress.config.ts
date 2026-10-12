import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
export default defineConfig({root:path.resolve(import.meta.dirname,'client'),plugins:[react(),tailwindcss()],resolve:{alias:{'@':path.resolve(import.meta.dirname,'client/src')}},base:'/wp-content/themes/dream-destination-safaris/',build:{outDir:'/home/ubuntu/dream-safari/wordpress-build',emptyOutDir:true,rollupOptions:{output:{manualChunks:{react:['react','react-dom'],ui:['@radix-ui/react-dialog','@radix-ui/react-tooltip']}}}}});
