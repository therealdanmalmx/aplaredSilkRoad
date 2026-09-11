import z, { uuid } from "zod";
import { customerSchema } from "./customerSchema";
import { createOrderItemSchema, orderItemSchema } from "./orderItemSchema";

export const createOrderSchema = z.object({
  customer: customerSchema,
  items: z.array(createOrderItemSchema).min(1),
});

export const responseOrderSchema = z.object({
  id: uuid(),
  createdAt: z.iso.datetime(),
  total: z.number(),
  customer: customerSchema,
  items: z.array(orderItemSchema).min(1),
});

export type CreateOrder = z.infer<typeof createOrderSchema>;
export type Order = z.infer<typeof responseOrderSchema>;
