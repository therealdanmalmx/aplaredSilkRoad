import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import type { Product } from "../../../api/src/interfaces/admin"

interface AdminFormProps {
    title: string,
}

const AdminForm = ({ title }: AdminFormProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  const form = useForm<Product>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      imageURL: "",
      price: undefined
    },
    mode: "onSubmit",
  })
  
  function onSubmit(data: Product) {
    // Do something with the form values.
    console.log(data)
    
  }
  
  const params = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
      const res = await fetch(`http://localhost:3000/admin`);
      if (!res.ok){ 
        throw new Error(res.statusText);
      };
      setProducts(await res.json());

      setProduct(products.find((product) => product.id === params.id));
    
      console.log({product});
    } catch (err) {
      console.error(err);
    }
  };
  fetchProduct();
}, [form]);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="h-full 5 w-11/12 md:w-125 rounded-md border-2 p-6 my-8 mx-auto border-primary">
            <h1 className="text-2xl font-black text-primary text-center mb-4">{title}</h1>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field 
                    data-invalid={fieldState.invalid} 
                >
                <FieldLabel 
                    htmlFor="form-name"
                    className="text-primary font-bold"
                    
                >
                Name
                </FieldLabel>
                  <Input
                    {...field}
                    id="form-name"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary"
                    value={location.pathname === `/admin/update-product` ? product?.name : ""}
                    />
            
                    <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field 
                    data-invalid={fieldState.invalid} 
                >
                    <FieldLabel 
                        htmlFor="form-slug"
                        className="text-primary font-bold"
                    >
                        Slug
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-slug"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field 
                    data-invalid={fieldState.invalid} 
                    >
                    <FieldLabel 
                        htmlFor="form-description"
                        className="text-primary font-bold"
                    >
                    Description
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-description"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="imageURL"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field 
                    data-invalid={fieldState.invalid} 
                    >
                    <FieldLabel 
                        htmlFor="form-imageURL"
                        className="text-primary font-bold"
                    >
                    ImageURL
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-imageURL"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field 
                    data-invalid={fieldState.invalid} 
                    >
                    <FieldLabel 
                        htmlFor="form-price"
                        className="text-primary font-bold"
                    >
                    Price
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-price"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit" className="p-2 bg-primary text-background cursor-pointer mt-4">Save</Button>
        </FieldGroup>
    </form>
  )
}

export default AdminForm