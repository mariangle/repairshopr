import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useToast } from "@/components/ui/use-toast"

interface RowActionsProps<T> {
    data: T,
}

export function RowActions<T> ({
    data
} : RowActionsProps<T>) {
  const { toast } = useToast()

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
            onClick={() => {
              // @ts-ignore
              navigator.clipboard.writeText(data.id)
              toast({
                title: "Copied to clipboard!",
              })
            }}
        >
            Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View details</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}