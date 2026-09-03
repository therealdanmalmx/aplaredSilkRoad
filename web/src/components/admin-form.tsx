import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import type { Product } from "../../../api/src/interfaces/admin"
import { creatAdminProductSchema } from "../../../api/src/schemas/adminSchemas"

interface AdminFormProps {
    title: string,
}

const AdminForm = ({ title }: AdminFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isUpdate = Boolean(id)

  const form = useForm<Product>({
    resolver: zodResolver(creatAdminProductSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      imageURL: "",
      price: 0
    },
  })
  
  async function onSubmit(data: Product) {
    console.log({isUpdate});
    setIsSubmitting(true);
    try {
      {const res = await fetch(
        isUpdate ? `http://localhost:3000/admin/${id}` : "http://localhost:3000/admin" , {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },        
        body: JSON.stringify({
          ...data,
          price: Number(String(data.price).replace(",", ".")),
        })
      })
      console.log(data);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);  
      }
      await res.json();
      setIsSubmitting(false);
      navigate("/admin");
    }
    } catch (error) {
      console.error(error);
    } 
    
  }
  
  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchProduct = async () => {
      try {
        let res = await fetch(isUpdate ? `http://localhost:3000/admin/${id}` : "http://localhost:3000/admin")

        if (!res.ok) {
          throw new Error(res.statusText)
        };

        const data = await res.json();

        form.reset({
          name: data.name,
          slug: data.slug,
          description: data.description,
          imageURL: data.imageURL,
          price: data.price/100,
        })      
      } catch (err) {
        console.error(err)
      }
    }
    fetchProduct();
  }, [id, form])

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
            <Button type="submit" className="p-2 bg-primary text-background cursor-pointer mt-4">{isSubmitting ? <Loader2 className="size-4 animate-spin mx-auto" /> : "Save"}</Button>
        </FieldGroup>
    </form>
  )
}

export default AdminForm