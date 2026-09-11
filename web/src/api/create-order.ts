import type { CreateOrder } from "../../../shared/schemas/orderSchema";

export default async function postOrder(newOrder: CreateOrder) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOrder),
  });

  return await res.json();
}
