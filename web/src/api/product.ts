import type { Product } from "../../../api/src/interfaces/admin";

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3000/admin/${id}`);

    if (!res.ok) {
        throw new Error(`Product fetch failed: ${res.status}`);
    };

    return await res.json();
};
