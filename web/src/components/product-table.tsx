
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";

const opedDeleteDialog = () => {
    console.log("delete");
}

export function ProductTable({ products }: { products: Product[] }) {    
  return (
    <Table className="w-full md:w-10/12 mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl text-orange-400 font-bold">Product</TableHead>
          <TableHead className="text-xl text-orange-400 font-bold">Name</TableHead>
          <TableHead className="text-xl text-orange-400 font-bold">Description</TableHead>
          <TableHead className="text-xl text-orange-400 font-bold">Slug</TableHead>
          <TableHead className="text-xl text-orange-400 font-bold">Price</TableHead>
          <TableHead className="text-xl text-orange-400 font-bold text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
            <TableRow key={product.id}>
                <TableCell><img src={product.imageURL} alt={product.name} className="size-24 object-cover"/></TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell>{product.price/100}kr</TableCell>
                <TableCell className="text-right p-0">
                    <Button className="cursor-pointer"><LuPencil /></Button>
                    
                     <AlertDialog>
                        <AlertDialogTrigger render={<Button variant="outline" className="cursor-pointer ml-1"><LuTrash2 /></Button>} />
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle className="text-orange-500">Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the product.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                            <AlertDialogAction className="cursor-pointer bg-red-500 hover:bg-red-400">Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialog>
                </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default ProductTable;