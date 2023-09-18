"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "../data/schema"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "issue",
    header: "Issue",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "tech",
    header: "Tech",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
  },
  {
    accessorKey: "last_updated",
    header: "Last Updated",
  },
]
