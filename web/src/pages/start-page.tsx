import { getProducts } from "@/api/products";
import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { useQuery } from "@tanstack/react-query";
import { LuFishSymbol } from "react-icons/lu";
import { Link } from "react-router";
import { MoonLoader } from "react-spinners";
import type { Product } from "../../../api/src/interfaces/admin";
import heroImg from "../assets/silk-road-hero.png";

export default function StartPage() {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (error) {
    console.log("no");
  }
  return (
    <>
      <Hero imgSource={heroImg} />

      <section className="mx-auto grid w-full max-w-screen-2xl h-full px-4">
        <>
          <div className="flex flex-row justify-center items-center w-full max-w-screen-2xl pt-8 px-4 sm:px-6">
            <hr className="w-full text-primary" />
            <LuFishSymbol className="mx-5 text-primary text-6xl" />
            <hr className="w-full text-primary" />
          </div>
          {isLoading && (
            <MoonLoader className="mx-auto mt-24" color="#a87932" size={50} />
          )}
          {products && (
            <div className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {products.map((product: Product) => {
                return (
                  <Link key={product.id} to={`/product/${product.slug}`}>
                    <ProductCard {...product}></ProductCard>
                  </Link>
              );
              })}
            </div>
          )}
        </>
      </section>
    </>
  );
}
