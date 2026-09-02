
import ProductCard from "@/components/product-card";
import ProductTable from "@/components/product-table";
import { useEffect, useState } from "react";
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
    <div>
        <h1 className="text-2xl font-bold my-4 text-center">Admin Page</h1>
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