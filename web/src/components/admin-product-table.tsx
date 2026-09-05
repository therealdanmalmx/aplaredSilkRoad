
import CustomDialog from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router";
import type { Product } from "../../../api/src/interfaces/admin";

export function AdminProductTable({ products, onDeleted }: { products: Product[], onDeleted: (id: string) => void }) {    
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
                <TableCell className="w-125 text-wrap whitespace-normal">{product.description}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell>{product.price/100}kr</TableCell>
                <TableCell className="text-right pr-2">
                <Link to={`update-product/${product.id}`}>
                  <Button className="cursor-pointer"><LuPencil /></Button>
                </Link>
                <CustomDialog productId={product.id} onDeleted={onDeleted}/>
                </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default AdminProductTable;