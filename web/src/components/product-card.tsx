import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import CustomDialog from "@/custom-dialog";
import { LuPencil } from "react-icons/lu";
import type { Product } from '../../../api/src/interfaces/admin';

export function ProductCard(product: Product) {
  return (
    <Card className="relative mx-auto w-11/12 sm pt-0 h-96">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-50 w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
        {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="rounded-none w-full cursor-pointer bg-orange-400 hover:bg-orange-500"><LuPencil /> Update</Button>
        <CustomDialog />
         {/* <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" className="rounded-none text-white w-full cursor-pointer bg-orange-400 hover:bg-orange-500"><LuTrash2 />Delete</Button>} />
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
            </AlertDialog> */}
      </CardFooter>
    </Card>
  )
}

export default ProductCard;