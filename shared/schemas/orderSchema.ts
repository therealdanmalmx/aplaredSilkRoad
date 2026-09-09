import z, { uuid } from "zod";
import { customerSchema } from "./customerSchema";
import { createOrderItemSchema } from "./orderItemSchema";

export const createOrderSchema = z.object({
  customer: customerSchema,
  items: z.array(createOrderItemSchema).min(1),
});

export const orderSchema = createOrderSchema.extend({
  id: uuid(),
  createdAt: z.iso.datetime(),
});
