"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { BsInfoCircle } from "react-icons/bs"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidateCredentials } from "@/actions/validate-credentials"
import { useApiStore } from "@/hooks/use-api-store"

const formSchema = z.object({
  subdomain: z.string().min(2).max(80),
  apiKey: z.string().min(2).max(80),
})

type LoginFormValues = z.infer<typeof formSchema>

export const LoginForm = () => {
  const { toast } = useToast();
  const apiStore = useApiStore();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subdomain: "",
      apiKey: ""
    },
  })

  const onSubmit = async (values: LoginFormValues) => {
    const response = await ValidateCredentials(values.subdomain, values.apiKey)

    if (response === null) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: "Please verify your credentials.",
      });    
    } else {
      toast({
        title: "Success!",
        description: "You have successfully logged in.",
      });
      apiStore.setCredentials(values);
      apiStore.setIsLogged(true);
    }    
  }
  

  return (
    <Card className="shadow-none ">
      <CardHeader className="space-y-2 flex flex-col items-center my-4">
        <CardTitle className="text-xl">Sign in to repairshopr</CardTitle>
        <CardDescription>Sign in using with your repairshopr subdomain and api key</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="subdomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subdomain</FormLabel>
                  <FormControl>
                    <Input placeholder="subdomain" {...field}/>
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
                    <Input placeholder="apieky" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"outline"} className="w-full">
                Sign In
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              or continue as
            </span>
          </div>
        </div>        
        <Button variant={"outline"} className="w-full gap-2">
            Test User
            <BsInfoCircle />
        </Button>
      </CardContent>
    </Card>
  )
}