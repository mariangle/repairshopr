"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "../../../../types/ticket"
import { RowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"
import { FormattedDate } from "@/components/formatted-date"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TicketDialog } from "@/components/ticket-dialog"
import { formatDistanceToNow } from 'date-fns';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "number",
    header: "#",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <Link 
            href={`/tickets/${row.original.id}`}
            className={cn(buttonVariants({ variant: "link" }), "px-0 text-foreground")}
            >
            {row.getValue("number")}
          </Link>
          <TicketDialog ticket={row.original}/>
        </div>
      )
    },
  },
  {
    accessorKey: "customer_business_then_name",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <Badge variant={row.original.status === "New" ? "default": "secondary"}>{row.original.status}</Badge>
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
  },
  {
    accessorKey: "comments",
    header: "Latest Update",
    cell: ({ row }) => {
      return (
        <div className="max-w-[350px] truncate">
          <span>{row.original.comments[0]?.body}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => <FormattedDate date={formatDistanceToNow(new Date(row.original.due_date), { addSuffix: true })} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions<Ticket> data={row.original}/>,
  },
]
