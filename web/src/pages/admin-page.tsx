
import ProductCard from "@/components/product-card";
import ProductTable from "@/components/product-table";
import { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { Link } from "react-router";
import { MoonLoader } from "react-spinners";
import type { Product } from "../../../api/src/interfaces/admin";


const AdminPage = () => {
    const [products, setProducts] = useState<Array<Product>>([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/admin");
      if (!res.ok) throw new Error(res.statusText);
      setProducts(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  fetchProducts();
}, []);
    
  return (
    <div className="mx-8 md:mx-12 h-screen">
        <h1 className="text-2xl text-primary font-bold my-4 text-center">Admin Page</h1>
        {isLoading &&
            <div className="flex justify-center items-center">
                <MoonLoader 
                    color='#a87932'
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        }

        {!isLoading &&
        <>
            <section className="flex justify-center md:justify-end items-center space-x-4 my-6">
                <p className="text-primary text-xl">Add new product </p>
                <Link to="/admin/add-product" className="flex items-center">
                    <LuCirclePlus className="text-primary hover:text-orange-600 duration-300 ease-in-out cursor-pointer" size={32}/>
                </Link>
            </section>
            <div>
                <div className="hidden md:block">
                    <ProductTable products={products}  />
                </div>

                <div className="flex flex-col gap-8 md:hidden">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
                </div>
            </div>
        </>
        }    
    </div>
  )
}

export default AdminPage