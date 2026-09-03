  
import {
    Field,
    FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"

const NewAdminProductPage = () => {
  return (
    <Field orientation="responsive" className="h-full 5 w-11/12 md:w-125 rounded-md border-2 p-6 my-8 mx-auto border-primary">
        <h1 className="text-2xl font-black text-primary text-center mb-4">Add new product</h1>
        <FieldLabel htmlFor="name" className="text-primary font-bold mt-2">Name</FieldLabel>
        <Input id="name" type="text" className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary" />
        <FieldLabel htmlFor="slug" className="text-primary font-bold mt-2">Slug</FieldLabel>
        <Input id="slug" type="text" className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary" />
        <FieldLabel htmlFor="description" className="text-primary font-bold mt-2">Description</FieldLabel>
        <Input id="description" type="text" className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary" />
        <FieldLabel htmlFor="imageURL" className="text-primary font-bold mt-2">ImageURL</FieldLabel>
        <Input id="imageURL" type="text" className="border-t-0 border-l-0 border-r-0 rounded-none p-2 bg-zinc-100 border-b border-primary" />
        <FieldLabel htmlFor="price" className="text-primary font-bold mt-2">Price</FieldLabel>
        <Input id="price" type="number" className="rounded-none p-2 bg-zinc-100 border-t-0 border-l-0 border-r-0 border-b border-primary" />
        <Button className="p-2 bg-primary text-background cursor-pointer mt-4">Save</Button>
    </Field>
  )
}


export default NewAdminProductPage