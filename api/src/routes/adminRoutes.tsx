import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import type { AdminProducts } from "../interfaces/admin.js";
import { createAdminProductScema } from "../schemas/adminSchemas.js";

const app = new Hono();

const products: AdminProducts[] = [
    {
        id: "8ecc3f63-cae7-4ef3-96d5-323fd121a969",
        name: "Silk Pants",
        slug: "silk-pants-056789",
        description: "Luxurious silk pants crafted from premium fabric for ultimate comfort and elegance. Perfect for any occasion."
    },
    {
        id: "eec731ea-b9dd-41a3-898a-7dfe3b67413d",
        name: "Silk T-Shirt",
        slug: "silk-shirt-975637",
        description: "Premium silk t-shirt offering softness and breathability for everyday wear."
    },
]

app.get("/", (c) => {
    return c.json(products)
});

app.get("/:id", (c) => {
    const id = c.req.param("id");
    const product = products.find((p) => p.id === id);

    if (!product) {
        return c.json({error: "No product found"}, 404);
    }
    
    return c.json(product);
});

app.post("/", sValidator("json", createAdminProductScema), (c) => {
    const data = c.req.valid("json");
    const product = {id: crypto.randomUUID(), ...data};

    products.push(product);

    return c.json(product, 201);
});

app.delete("/:id", (c) => {
    const id = c.req.param("id") ;
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return c.json({error: "Product not found"}, 404);
    }

    products.splice(productIndex, 1);

    return c.json(products);
})

export default app;