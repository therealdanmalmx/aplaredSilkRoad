import z from "zod";

export const orderItemSchema = z.object({
  productId: z.uuid(),
  quantity: z.number().int().positive(),
});
