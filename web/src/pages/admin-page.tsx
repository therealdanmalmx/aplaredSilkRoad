import { AdminProductCard } from "@/components/admin-product-card";
import { AdminProductTable } from "@/components/admin-product-table";

import { getProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { LuCirclePlus } from "react-icons/lu";
import { Link } from "react-router";
import { MoonLoader } from "react-spinners";
import type { Product } from "../../../api/src/interfaces/admin";

const AdminPage = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (error) {
    toast.error("Something went wron. Try again.");
  }

  const handleDelete = (id: string) => {
    products.filter((product: Product) => product.id !== id);
  };

  return (
    <div className='mx-8 md:mx-12 h-screen'>
      <h1 className='text-2xl text-primary font-bold my-4 text-center'>
        Admin Page
      </h1>
      {isLoading && (
        <div className='flex justify-center items-center mt-24'>
          <MoonLoader
            color='#a87932'
            size={100}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      )}

      {!isLoading && (
        <>
          <section className='flex justify-center md:justify-end items-center space-x-4 my-6'>
            <p className='text-primary text-xl'>Add new product </p>
            <Link to='/admin/add-product' className='flex items-center'>
              <LuCirclePlus
                className='text-primary hover:text-orange-600 duration-300 ease-in-out cursor-pointer'
                size={32}
              />
            </Link>
          </section>
          <div>
            <div className='hidden md:block'>
              <AdminProductTable products={products} onDeleted={handleDelete} />
            </div>

            <div className='flex flex-col gap-8 md:hidden'>
              {products.map((product) => (
                <AdminProductCard
                  key={product.id}
                  product={product}
                  onDeleted={handleDelete}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
