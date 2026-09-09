import type { Product } from "../../../api/src/interfaces/admin";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/admin");

  const data = await res.json();

  return data;
}
