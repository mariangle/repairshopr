import { z } from "zod"
import { customerSchema } from "./customer"
import { userSchema } from "./user"
import { commentSchema } from "./comment"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const ticketSchema = z.object({
  id: z.string(),
  number: z.string(),
  problem_type: z.string(),
  customer_business_then_name: z.string(),
  subject: z.string(),
  status: z.string(),
  type: z.string(),
  updated_at: z.string(),
  due_date: z.string(),
  created_at: z.string(),
  priority: z.string(),
  customer: customerSchema, 
  user: userSchema,
  comments: z.array(commentSchema),
})

export type Ticket = z.infer<typeof ticketSchema>