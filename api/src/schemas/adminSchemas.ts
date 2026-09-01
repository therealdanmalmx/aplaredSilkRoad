import z from "zod";

export const creatAdminProductSchema = z.object({
    name: z.string().min(5),
    slug: z.string().min(5),
    description: z.string().min(15),
});

export const updateAdminProductSchema = z.object({
    name: z.string().min(5).optional(),
    slug: z.string().min(5).optional(),
    description: z.string().min(15).nullable().optional(),
})