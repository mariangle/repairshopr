"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "../../../../types/ticket"
import { RowActions } from "./data-table-row-actions"
import { issues, statuses } from "../data/data"
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
            className={cn(buttonVariants({ variant: "link" }), "px-0")}
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
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null;
      }

      return (
      <Badge variant="outline">{status.label}</Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
    cell: ({ row }) => {
      const issue = issues.find((issue) => issue.value === row.original.problem_type)

      return (
        <div className="flex space-x-2">
          {issue && <Badge variant="outline">{issue.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("subject")}
          </span>
        </div>
      )
    },
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
