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

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <Hero imgSource={heroImg} />

      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product) => {
          return <ProductCard {...product}></ProductCard>;
        })}
      </div>
    </section>
  );
}
