import path from "path"
import { z } from "zod"
import { promises as fs } from "fs"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { ticketSchema, Ticket } from "./data/schema"

async function getData(): Promise<Ticket[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(routes)/tickets/data/tickets.json")
  )

  const tickets = JSON.parse(data.toString())

  return z.array(ticketSchema).parse(tickets)
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  ) 
}
