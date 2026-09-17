import { getProducts } from "@/api/products";
import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { useQuery } from "@tanstack/react-query";
import { LuFishSymbol } from "react-icons/lu";
import { MoonLoader } from "react-spinners";
import type { Product } from "../../../api/src/interfaces/admin";
import heroImg from "../assets/silk-road-hero.png";

export default function StartPage() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

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
          {isError && (
            <div className="flex flex-1 items-center justify-center font-eb-garamond px-4 py-16">
              <p className="text-center font-eb-garamond text-4xl leading-tight text-primary sm:text-5xl">
                We could find any treasures at this time. Please try again
                later...
              </p>
            </div>
          )}
          {isLoading && (
            <MoonLoader className="mx-auto mt-24" color="#a87932" size={50} />
          )}
          {products && (
            <div className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {products
                .filter((product) => !product.isDeleted)
                .map((product: Product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          )}
        </>
      </section>
    </>
  );
}
