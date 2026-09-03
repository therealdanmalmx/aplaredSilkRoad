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
import { LuTrash2 } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router";


const CustomDialog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const deleteProduct = async (id: string) => {
        if (!id) {
            return;
        }
      try {
        const res = await fetch(`http://localhost:3000/admin/${id}`, {
          method: "DELETE",
        });
    
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        await res.json()
        navigate("/admin")

    
      } catch (err) {
        console.error(err);
      }
    };
    
  return (
    <AlertDialog>
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
            <Link to={`/admin/delete-product/${id}`}>
                <AlertDialogAction onClick={() => deleteProduct(id!)} variant="destructive" className="cursor-pointer text-background bg-destructive hover:text-destructive hover:bg-muted/50 hover:border-destructive">Delete</AlertDialogAction>
            </Link>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>  )
}

export default CustomDialog