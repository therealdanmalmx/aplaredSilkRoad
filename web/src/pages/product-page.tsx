import { getProduct } from '@/api/product';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useParams } from 'react-router';
import { MoonLoader } from 'react-spinners';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const { data: product, isPending, error, status, fetchStatus } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => await getProduct(id ?? ""),
    enabled: !!id,
  });

  if (error) {
    console.error(error);
    return <p>Something went wrong! Try again.</p>
  }

  if (isPending) {
    return (
      <div className="flex justify-center items-center mt-24">
        <MoonLoader 
          color='#a87932'
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
      </div>)
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)

  }
  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }
  
  // const product = products.find((p: Product) => p.slug === slug);

  const totalPrice = () => {
    return Number(quantity * Number(product.price/100)).toFixed(2);
  }

  return (
    <article className='m-4 grid md:flex md:flex-row md:w-full h-full'>
      <section>
        <img className="object-cover w-125 h-96 rounded-xl" src={product.imageURL} alt={product.name} />
      </section>
      <div className='flex flex-col justify-between md:ml-12 mt-8 md:mt-0 md:w-1/3'>
        <section className='flex flex-col gap-4'>
          <h1 className="text-4xl italic text-black">{product.name}</h1>
          <h3 className='text-primary text-2xl'>{product.price/100} kr</h3>
          <p className='text-xl'>{product.description}</p>
        </section>
          <section className='flex justify-between gap-4 mt-20 md:mt-0'>
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

      </div>
    </article>

  )
}

export default ProductPage;