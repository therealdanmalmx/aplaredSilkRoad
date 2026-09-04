import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { LuFishSymbol } from "react-icons/lu";
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
    <>
      <Hero imgSource={heroImg} />
      <section className="mx-auto grid w-full max-w-screen-2xl px-4">
        <div className="flex flex-row justify-center items-center w-full max-w-screen-2xl pt-8 px-4 sm:px-6">
          <hr className="w-full text-primary" />
          {/* <p className="px-5">-</p> */}
          <LuFishSymbol className="mx-5 text-primary text-6xl" />
          <hr className="w-full text-primary" />
        </div>
        <div className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {products.map((product) => {
            return <ProductCard {...product}></ProductCard>;
          })}
        </div>
      </section>
    </>
  );
}
