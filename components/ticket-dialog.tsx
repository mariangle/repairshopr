import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Comment } from "@/components/comment"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import { Info } from "lucide-react"
import { Ticket } from "@/types/ticket"

interface TicketDialogProps {
    ticket: Ticket;
  }
  
  export const TicketDialog: React.FC<TicketDialogProps> = ({ ticket }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Info className="w-4 h-4 cursor-pointer"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>#{ticket.number} <Badge>{ticket.status}</Badge></DialogTitle>
          <DialogDescription>
            {ticket.subject}
          </DialogDescription>
        </DialogHeader>
        {ticket.comments.map((comment) => <Comment comment={comment}/>)}

        <DialogFooter>
          <Link href={`/tickets/${ticket.id}`} className={buttonVariants({ variant: "default" })}>View Details</Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
