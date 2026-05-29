import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'error-logger',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/log-error' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              fs.writeFileSync(path.join(__dirname, 'error.log'), body);
              res.statusCode = 200;
              res.end('OK');
            });
          } else {
            next();
          }
        });
      }
    }
  ],
})
