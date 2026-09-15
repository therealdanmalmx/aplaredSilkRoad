import type { Product } from "../../../api/src/interfaces/admin";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/v1/admin");

  const data = await res.json();

  return data;
}

export const deleteProduct = async (id: string) => {
  const product = (await getProducts()).filter((product) => product.id === id);

  return product;
};
