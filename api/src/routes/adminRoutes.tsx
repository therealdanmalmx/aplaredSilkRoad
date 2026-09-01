import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import { db } from "../prisma/db.ts";
import { creatAdminProductSchema } from "../schemas/adminSchemas.ts";

const app = new Hono();

// const products: {id: string, name: string, slug: string, description: string | null}[] = [
//     {
//         id: "8ecc3f63-cae7-4ef3-96d5-323fd121a969",
//         name: "Silk Pants",
//         slug: "silk-pants-056789",
//         description: "Luxurious silk pants crafted from premium fabric for ultimate comfort and elegance. Perfect for any occasion."
//     },
//     {
//         id: "eec731ea-b9dd-41a3-898a-7dfe3b67413d",
//         name: "Silk T-Shirt",
//         slug: "silk-shirt-975637",
//         description: "Premium silk t-shirt offering softness and breathability for everyday wear."
//     },
// ]

// app.get("/", (c) => {
//     return c.json(products)
// });

// app.get("/:id", (c) => {
//     const id = c.req.param("id");
//     const product = products.find((p) => p.id === id);

//     if (!product) {
//         return c.json({error: "No product found"}, 404);
//     }
    
//     return c.json(product);
// });

app.post("/", sValidator("json", creatAdminProductSchema), async (c) => {
  const data = c.req.valid("json");
  const product = await db.orm.public.Product.create(data);
  return c.json(product, 201);
});

// app.post("/", sValidator("json", creatAdminProductSchema), (c) => {
//     const data = c.req.valid("json");
//     const product = {id: crypto.randomUUID(), ...data};
    
//     products.push(product);
    
//     return c.json(product, 201);
// });

// app.put("/:id", sValidator("json", updateAdminProductSchema), (c) => {
//     const id = c.req.param("id");
//     const data = c.req.valid("json");
    
//     const product = products.find(p => p.id === id);

//     if (!product) {
//         return c.json({error: "Product not found"}, 404);
//     }

//     if (data.name !== undefined) {
//         product.name = data.name
//     }
//     if (data.slug !== undefined) {
//         product.slug = data.slug
//     }
//     if (data.description !== undefined) {
//         product.description = data.description
//     }

//     products.push(product);

//     return c.json(product);
// });

// app.delete("/:id", (c) => {
//     const id = c.req.param("id") ;
//     const productIndex = products.findIndex(p => p.id === id);

//     if (productIndex === -1) {
//         return c.json({error: "Product not found"}, 404);
//     }

//     products.splice(productIndex, 1);

//     return c.body(null, 204);
// });

export default app;