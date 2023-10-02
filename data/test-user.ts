import { Credentials, User } from "@/hooks/use-api-store"

export const TestCredentials: Credentials = {
    subdomain: "teststore",
    apiKey: ""
}

export const TestUser:  User = {
    isAdmin: true,
    email: "test@email.com",
    name: "Johnny Test"
}