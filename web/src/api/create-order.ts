import type { CreateOrder } from "../../../shared/schemas/orderSchema";

export default async function postOrder(newOrder: CreateOrder) {
  const res = await fetch("/api/v1/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOrder),
  });

  if (!res.ok) throw new Error("Failed to create new order. " + res.status);

  return await res.json();
}
