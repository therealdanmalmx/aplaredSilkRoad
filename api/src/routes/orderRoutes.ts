import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import { db } from "../prisma/db";
import { createOrderSchema } from "../schemas/orderSchema";

const app = new Hono();

app.post("/", sValidator("json", createOrderSchema), async (c) => {
  //   const data = c.req.valid("json");
  const { customer, items } = c.req.valid("json");

  const productIds = items.map((i) => i.productId);

  const products = await db.orm.public.Product.where((p) =>
    p.id.in(productIds),
  ).all();

  const orderItems = items.map((i) => {
    const product = products.find((p) => p.id === i.productId);

    if (!product) {
      throw new Error(`Could not find product: ${i.productId}`);
    }

    return {
      productId: product.id,
      quantity: i.quantity,
      unitPrice: product.price,
    };
  });

  const total = orderItems.reduce(
    (sum, i) => sum + i.unitPrice * i.quantity,
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
