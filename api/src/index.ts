import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import adminRoutes from './routes/adminRoutes.js';

const app = new Hono()

app.route("/admin", adminRoutes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

