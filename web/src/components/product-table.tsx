
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomDialog from "@/custom-dialog";
import { LuPencil } from "react-icons/lu";
import type { Product } from "../../../api/src/interfaces/admin";

export function ProductTable({ products }: { products: Product[] }) {    
  return (
    <Table className="w-full mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl text-primary font-bold">Product</TableHead>
          <TableHead className="text-xl text-primary font-bold">Name</TableHead>
          <TableHead className="text-xl text-primary font-bold">Description</TableHead>
          <TableHead className="text-xl text-primary font-bold">Slug</TableHead>
          <TableHead className="text-xl text-primary font-bold">Price</TableHead>
          <TableHead className="text-xl text-primary font-bold text-right">Actions</TableHead>
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
                <CustomDialog />
                </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default ProductTable;