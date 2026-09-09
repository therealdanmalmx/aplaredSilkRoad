import z from "zod";

export const addressSchema = z.object({
  country: z.string().min(1),
  city: z.string().min(1),
  street: z.string().min(1),
  zipCode: z.string().min(1),
});

export const customerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(1),
  address: addressSchema,
});
