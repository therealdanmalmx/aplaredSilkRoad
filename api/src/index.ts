import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import adminRoutes from './routes/adminRoutes.js';

const app = new Hono()

app.use(
  '*',
  cors({
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'],
    allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
);

app.route("/admin", adminRoutes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

