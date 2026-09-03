import z from "zod";

export const creatAdminProductSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    slug: z.string().min(5).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers and dashes only. Minimum 5 characters"),
    description: z.string().min(15, "Description is required with a minimum of 15 characters"),
    imageURL: z.url("Must be a valid URL"),
    price: z.number().int("Price must be in whole cents").positive("Price must be greater than 0"),
});

export const updateAdminProductSchema = z.object({
    name: z.string().min(5).optional(),
    slug: z.string().min(5).optional(),
    description: z.string().min(15).nullable().optional(),
    imageURL: z.string().optional(),
    price: z.number().int("Price must be in whole cents").positive("Price must be greater than 0").optional(),
});