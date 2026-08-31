import z from "zod";

export const createAdminProductScema = z.object({
    name: z.string().min(5),
    slug: z.string().min(5),
    description: z.string().min(15)
})