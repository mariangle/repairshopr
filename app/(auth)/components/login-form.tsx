"use client"

import * as z from "zod";
import * as react from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { TestTube2 as TestIcon } from "lucide-react"
import { AuthButton } from "./auth-button";

import { TestUser, TestCredentials} from "@/data/test-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { GetUser } from "@/actions/get-user"
import { useForm } from "react-hook-form"
import { useApiStore } from "@/hooks/use-api-store"
import { useRouter } from "next/navigation"
import { useStore } from "@/hooks/use-store"

const formSchema = z.object({
  subdomain: z.string().min(2).max(20),
  apiKey: z.string().min(2).max(80),
})

type LoginFormValues = z.infer<typeof formSchema>

export const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const apiStore = useStore(useApiStore, (store) => store);
  const [isLoading, setIsLoading] = react.useState<boolean>(false);
  const [isTestLoading, setIsTestLoading] = react.useState<boolean>(false);
  const form = useForm<LoginFormValues>({ resolver: zodResolver(formSchema)})

  react.useEffect(() => {
    if (apiStore?.isLogged) router.push("/tickets");
  }, [apiStore?.isLogged]);  

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    const user = await GetUser(values)

    const toastMessage = user
    ? {
        title: `Welcome, ${user.user_name}!`,
      }
    : {
        variant: "destructive",
        title: "Login Failed",
        description: "Incorrect credentials. Please try again.",
      };
    // @ts-ignore
    toast(toastMessage);

    if (user !== null) {
      const formattedUser = {
        isAdmin: user.admin,
        name: user.user_name,
        email: user.user_email,
      };
  
      apiStore?.login(values, formattedUser, false);
      router.push("/tickets");
    }

    setIsLoading(false);
  }
  
  const onTestUser = async () => {
    setIsTestLoading(true);
  
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
  
    apiStore?.login(TestCredentials, TestUser, true);
    router.push("/tickets");
  
    toast({
      title: `Welcome, ${TestUser.name}!`,
      description: "You have successfully logged in.",
    });
  
    setIsTestLoading(false);
  };
  
  return (
    <div className="max-w-sm w-full mx-auto p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
            <div className="mt-2 text-xs border bg-secondary p-1 border-primary">
              <code>
                https://{form.watch("subdomain") || "your-subdomain"}.repairshopr.com/api/v1
              </code>
            </div>
            <FormField
              control={form.control}
              name="subdomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subdomain</FormLabel>
                  <FormControl>
                    <Input placeholder="your-subdomain" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apiKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Key</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AuthButton disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
            </AuthButton>
          </form>
        </Form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              or continue with
            </span>
          </div>
        </div>    
        <AuthButton 
          variant={"secondary"} 
          onClick={onTestUser}
          disabled={isTestLoading}>
            <TestIcon className="mr-2 h-4 w-4" />
            Test Credentials
        </AuthButton>
    </div>
  )
}