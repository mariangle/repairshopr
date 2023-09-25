import { z } from "zod"

export const userSchema = z.object({
    id: z.string(),
    email: z.string(),
    full_name: z.string(),
})

export type User = z.infer<typeof userSchema>
