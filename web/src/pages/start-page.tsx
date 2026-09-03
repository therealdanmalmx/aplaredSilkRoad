import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import type { Product } from "../../../api/src/interfaces/admin";
import heroImg from "../assets/silk-road-hero.png";

export default function StartPage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/admin");
      const data = await res.json();
      console.log({ data });
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <section>
      <Hero imgSource={heroImg} />
      <div className="flex items-center gap-2">
        {products.map((product) => {
          return <ProductCard {...product}></ProductCard>;
        })}
      </div>
    </section>
  );
}
