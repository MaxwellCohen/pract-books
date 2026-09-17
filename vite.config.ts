import { fileURLToPath } from 'node:url';
import { cloudflareAdapter } from '@pracht/adapter-cloudflare';
import { netlifyAdapter } from '@pracht/adapter-netlify';
import { vercelAdapter } from '@pracht/adapter-vercel';
import { pracht } from '@pracht/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const isCloudflare = Boolean(process.env.CLOUDFLARE || process.env.WORKERS_CI || process.env.CF_PAGES);
const adapter = isCloudflare
  ? cloudflareAdapter()
  : process.env.NETLIFY
    ? netlifyAdapter()
    : vercelAdapter();

export default defineConfig({
  plugins: [pracht({ adapter, llmsTxt: {} }), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
