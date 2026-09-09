import z from "zod";

export const createOrderItemSchema = z.object({
  productId: z.uuid(),
  quantity: z.number().int().positive(),
});

export const orderItemSchema = createOrderItemSchema.extend({
  unitPrice: z.number(),
});
