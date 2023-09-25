import { z } from "zod"

export const customerSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  fullname: z.string(),
  business_name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
})

export type Customer = z.infer<typeof customerSchema>
