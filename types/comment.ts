import { z } from "zod"

export const commentSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  subject: z.string(),
  body: z.string(),
  tech: z.string(),
  hidden: z.boolean().optional(),
  do_not_email: z.boolean().optional(),
})

export type Comment = z.infer<typeof commentSchema>
