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
import { Ticket } from "@/types/ticket"

import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

interface RowActionsProps<Ticket> {
    data: Ticket,
}

export function RowActions<T> ({
    data
} : RowActionsProps<T>) {
  const { toast } = useToast()
  const router = useRouter();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast({
      title: "Copied to clipboard!",
    })
  }

  const onView = (id: string) => {
    router.push(`/tickets/${id}`)
  }

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
            // @ts-ignore
            onClick={() => onCopy(data.id)}
        >
            Copy ID
        </DropdownMenuItem>
        <DropdownMenuItem
            // @ts-ignore
            onClick={() => onCopy(data.number)}
        >
            Copy Number
        </DropdownMenuItem>
        <DropdownMenuSeparator />
          <DropdownMenuItem
              // @ts-ignore
              onClick={() => onView(data.id)}
          >
              View Details
          </DropdownMenuItem>        
        </DropdownMenuContent>
    </DropdownMenu>
  )
}