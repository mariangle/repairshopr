"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "../data/schema"
import { RowActions } from "./data-table-row-actions"
import { issues, priorities, statuses } from "../data/data"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"
import { FormattedDate } from "@/components/formatted-date"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "number",
    header: "#",
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
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
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
    accessorKey: "user.full_name",
    header: "Tech",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: ({ row }) => <FormattedDate date={row.getValue("updated_at") as string} />,
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => <FormattedDate date={row.getValue("due_date") as string} />,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions<Ticket> data={row.original}/>,
  },
]
