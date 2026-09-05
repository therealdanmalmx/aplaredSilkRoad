import { getProducts } from '@/api/products';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useParams } from 'react-router';
import type { Product } from '../../../api/src/interfaces/admin';


const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)

  }
  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1)
    if (quantity <= 1)
    {
      setQuantity(1)
    }
  }
  
  const product = products.find((p) => p.slug === slug);

  const totalPrice = () => {
    if (!product) return 0;
    return Number(quantity * Number(product.price/100)).toFixed(2);
  }


  if (!product) return null;

  return (
    <article className='m-4 grid md:flex md:flex-row'>
      <section>
        <img className="object-cover w-125 h-96 rounded-xl" src={product.imageURL} alt={product.name} />
      </section>
      <section className="md:ml-12 mt-8 md:mt-0 flex flex-col gap-4">
        <h1 className="text-4xl italic text-black">{product.name}</h1>
        <h3 className='text-primary text-2xl'>{product.price/100} kr</h3>
        <p className='text-xl'>{product.description}</p>
        <section className='flex gap-4'>
          <div className='w-24 h-10 p-4 border border-chart-5 flex justify-between items-center rounded-md'>
            <p className="cursor-pointer" onClick={decreaseQuantity}><FaMinus size={10}/></p>
            <p>{quantity}</p>
            <p className="cursor-pointer text-sm" onClick={increaseQuantity}><FaPlus size={10} /></p>
          </div>
          <div className='cursor-pointer w-full h-10 p-4 border bg-primary text-slate-100 flex justify-between items-center rounded-md'>
            <div className='flex items-center gap-4 w-2/3'>
              <FaPlus />
            <span>Add to cart </span>
            </div>
            <div className='w-1/3 text-right'>
              {totalPrice()}kr
            </div>
          </div>
        </section>
      </section>
    </article>

  )
}

export default ProductPage;