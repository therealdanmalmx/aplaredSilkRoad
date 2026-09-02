import { useEffect, useState } from "react";

import ProductCard from "@/components/product-card";
import type { Product } from '../../../api/src/interfaces/admin';

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
    }, [])


  return (
    <div className="flex justify-between gap-2 items-center m-8">
        {products.map((product) => {
            return (
                <ProductCard key={product.id} {...product}/>)
        })}
    </div>
  )
}

export default AdminPage