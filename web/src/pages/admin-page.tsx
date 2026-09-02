
import ProductCard from "@/components/product-card";
import ProductTable from "@/components/product-table";
import { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";

const AdminPage = () => {
    const [products, setProducts] = useState<Array<Product>>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:3000/admin")
            const data = await res.json();
            console.log({data});
            setProducts(data)
        }
        fetchProducts();
    }, []);
    
  return (
    <div className="mx-12">
        <h1 className="text-2xl text-primary font-bold my-4 text-center">Admin Page</h1>
        <section className="flex justify-end items-center space-x-4 my-6">
            <p className="text-primary text-xl">Add new product </p>
            <LuCirclePlus className="text-primary hover:text-orange-500 duration-300 ease-in-out cursor-pointer" size={32}/>
        </section>
        {
            window.innerWidth > 760 
            ? 
                (<ProductTable products={products} />)
            :
            <div className="flex flex-col gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        }
    </div>
  )
}

export default AdminPage