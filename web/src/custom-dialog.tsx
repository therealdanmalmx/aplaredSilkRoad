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

const CustomDialog = () => {
  return (
    <AlertDialog>
        {window.innerWidth > 760 
            ?
                (<AlertDialogTrigger render={<Button variant="outline" className="cursor-pointer ml-1"><LuTrash2 /></Button>} />)
            :
                (<AlertDialogTrigger render={<Button variant="outline" className="rounded-none text-white w-full cursor-pointer bg-primary"><LuTrash2 />Delete</Button>} />)
        }
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the product.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" className="cursor-pointer text-background bg-destructive hover:text-destructive hover:bg-muted/50 hover:border-destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>  )
}

export default CustomDialog