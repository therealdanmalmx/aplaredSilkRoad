  import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { creatAdminProductSchema } from "../../../api/src/schemas/adminSchemas"

type NewAdminProductFormData = {
  name: string
  slug: string
  description: string
  imageURL: string
  price: number
}

const NewAdminProductPage = () => {
  const form = useForm<NewAdminProductFormData>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      imageURL: "",
      price: undefined
    },
    resolver: zodResolver(creatAdminProductSchema),
    mode: "onSubmit",
  })

  function onSubmit(data: NewAdminProductFormData) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="h-full 5 w-11/12 md:w-125 rounded-md border-2 p-6 my-8 mx-auto border-primary">
            <h1 className="text-2xl font-black text-primary text-center mb-4">Add new product</h1>
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
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


export default NewAdminProductPage;
