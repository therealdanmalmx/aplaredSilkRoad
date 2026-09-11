import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import adminRoutes from "./routes/adminRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  }),
);

// slash should be included in base_url -> {stuff}admin -> NOT {stuff}/admin
app.route(`${process.env.BASE_URL}admin`, adminRoutes);
app.route(`${process.env.BASE_URL}order`, orderRoutes);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
