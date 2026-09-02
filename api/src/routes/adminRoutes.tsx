import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import { db } from "../prisma/db.ts";
import { creatAdminProductSchema, updateAdminProductSchema } from "../schemas/adminSchemas.ts";

const app = new Hono();

app.get("/", async (c) => {
  const products = await db.orm.public.Product.all();
  return c.json(products);});
  
  app.get("/:id", async (c) => {
      const id = c.req.param("id");
      const product = await db.orm.public.Product.first({id})

    if (!product) {
        return c.json({error: "No product found"}, 404);
    }
    
    return c.json(product);
});

app.post("/", sValidator("json", creatAdminProductSchema), async (c) => {
    const slug = c.req.param("slug");
    const existingProduct = await db.orm.public.Product.where({ slug }).first();

    if (existingProduct) {
        return c.json({error: "Product already exists"}, 422)
    }

    const data = c.req.valid("json");
    const product = await db.orm.public.Product.create(data);
    return c.json(product, 201);
});


app.put("/:id", sValidator("json", updateAdminProductSchema), async (c) => {
  const id = c.req.param("id");
  const data = c.req.valid("json");

  const product = await db.orm.public.Product.where({ id }).update(data);

  if (!product) {
    return c.json({ error: "Product not found" }, 404);
  }

  return c.json(product);
});

app.delete("/:id", async (c) => {
    const id = c.req.param("id") ;
    const product = await db.orm.public.Product.where({ id }).delete();

    if (!product ) {
        return c.json({error: "Product not found"}, 404);
    }

    return c.body(null, 204);
});

export default app;