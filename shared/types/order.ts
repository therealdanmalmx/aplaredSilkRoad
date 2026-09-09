import z from "zod";
import { orderItemSchema } from "../schemas/orderItemSchema";
import { createOrderSchema, orderSchema } from "../schemas/orderSchema";

export type CreateOrder = z.infer<typeof createOrderSchema>;
export type Order = z.infer<typeof orderSchema>;

export type OrderItem = z.infer<typeof orderItemSchema>;
