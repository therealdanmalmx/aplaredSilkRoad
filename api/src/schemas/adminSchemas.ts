import z from "zod";

export const creatAdminProductSchema = z.object({
    name: z.string().min(5),
    slug: z.string().min(5),
    description: z.string().min(15),
    imageURL: z.string(),
    price: z.number()
    .positive()
    .multipleOf(0.01)
    .transform(v => Math.round(v * 100)),});

export const updateAdminProductSchema = z.object({
    name: z.string().min(5).optional(),
    slug: z.string().min(5).optional(),
    description: z.string().min(15).nullable().optional(),
    imageURL: z.string().optional(),
    price: z.number().optional()
})