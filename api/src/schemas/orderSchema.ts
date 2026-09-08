import z from "zod";
import { customerSchema } from "./customerSchema";
import { orderItemSchema } from "./orderItemSchema";

export const createOrderSchema = z.object({
  customer: customerSchema,
  items: z.array(orderItemSchema).min(1),
});
