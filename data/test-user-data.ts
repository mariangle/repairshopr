import { Credentials, User } from "@/hooks/use-api-store"

export const TestCredentials: Credentials = {
    subdomain: "test-domain",
    apiKey: ""
}

export const TestUser:  User = {
    isAdmin: true,
    email: "test@email.com",
    name: "John Doe"
}