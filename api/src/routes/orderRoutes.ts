import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import { createOrderSchema } from "../../../shared/schemas/orderSchema";
import { db } from "../prisma/db";

const app = new Hono();

app.get("/:id", async (c) => {
  const id = c.req.param("id");

  const order = await db.orm.public.Order.first({ id });

  if (!order) {
    return c.json({ error: "Could not find order." }, 404);
  }

  const orderItems = await db.orm.public.OrderItem.where({
    orderId: order.id,
  }).all();

  return c.json({ order, orderItems });
});

app.post("/", sValidator("json", createOrderSchema), async (c) => {
  const { customer, items } = c.req.valid("json");

  const productIds = items.map((item) => item.productId);

  const products = await db.orm.public.Product.where((p) =>
    p.id.in(productIds),
  ).all();

  const orderItems = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) {
      throw new Error(`Could not find product: ${item.productId}`);
    }

    return {
      productId: product.id,
      quantity: item.quantity,
      unitPrice: product.price,
    };
  });

  const total = orderItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const result = await db.transaction(async (tx) => {
    const order = await tx.orm.public.Order.create({
      firstName: customer.firstName,
      lastName: customer.lastName,
      phone: customer.phone,
      city: customer.address.city,
      country: customer.address.country,
      street: customer.address.street,
      zipCode: customer.address.zipCode,
      total,
    });

    for (const item of orderItems) {
      await tx.orm.public.OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
      });
    }

    return order;
  });

  return c.json({ ...result, items: orderItems }, 201);
});

export default app;
