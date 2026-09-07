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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LuTrash2 } from "react-icons/lu";
import { useNavigate } from "react-router";
import type { Product } from "../../../api/src/interfaces/admin";


const CustomDialog = ({productId, onDeleted}: {productId: string, onDeleted: (id: string) => void}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/admin");
        if (!res.ok) throw new Error(res.statusText);
        setProducts(await res.json());
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  async function handleDelete() {
    await deleteProduct()
    setOpen(false)
  }
  
  const deleteProduct = async () => {
    if (!productId) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/admin/${productId}`, {
        method: "DELETE",
      });
  
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      onDeleted(productId);
      navigate("/admin");
      toast.success(`${products.find((p) => p.id === productId)?.name} has been deleted.`)
      
    } catch (err) {
      toast.error(`${products.find((p) => p.id === productId)?.name} could not be deleted. Please try again.`)
      console.error(err);
    }
  };

  // Silk T-Shirt	Premium silk t-shirt offering softness and breathability for everyday wear.	silk-shirt-975637	17.95kr	

    
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="outline" className="cursor-pointer hidden md:inline-flex ml-1"><LuTrash2 /></Button>} />
        <AlertDialogTrigger render={<Button  variant="outline" className="rounded-none inline-flex md:hidden text-white w-full cursor-pointer bg-primary"><LuTrash2 />Delete</Button>} />
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the product.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} variant="destructive" className="cursor-pointer text-background bg-destructive hover:text-destructive hover:bg-muted/50 hover:border-destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>  )
}

export default CustomDialog