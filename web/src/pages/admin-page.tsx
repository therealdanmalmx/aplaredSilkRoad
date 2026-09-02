import { useEffect, useState } from "react";

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
    <div>
        {products.map((product) => {
            return <div key={product.id}>{product.name}</div>
        })}
    </div>
  )
}

export default AdminPage