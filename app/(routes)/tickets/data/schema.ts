import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const ticketSchema = z.object({
  id: z.string(),
  problem_type: z.string(),
  customer_business_then_name: z.string(),
  subject: z.string(),
  status: z.string(),
  tech: z.string(),
  type: z.string(),
  updated_at: z.string(),
  due_date: z.string(),
  priority: z.string(),
})

export type Ticket = z.infer<typeof ticketSchema>