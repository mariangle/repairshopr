import { z } from "zod"

export const commentSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  subject: z.string(),
  body: z.string(),
  tech: z.string(),
  hidden: z.string(),
  do_not_email: z.string(),
})

export type Comment = z.infer<typeof commentSchema>
