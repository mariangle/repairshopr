"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2Icon } from "lucide-react";

import { useRouter } from "next/navigation";
import { GetTicketsByNumber } from "@/actions/get-ticket-by-number";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import qs from "query-string";
import * as z from "zod";
import * as react from "react";

const formSchema = z.object({
  ticketNumber: z
    .string()
    .min(1, { message: "Ticketnummer skal mindst være 1 tegn." })
    .regex(/^\d+$/, { message: "Ticketnummeret kan kun indeholde tal." }),
});

type SearchFormValues = z.infer<typeof formSchema>;

export const TicketSearchForm = () => {
  const { toast } = useToast();
  const [isLoading, setisLoading] = react.useState<boolean>(false);
  const router = useRouter();

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketNumber: "",
    },
  });

  const onSubmitSearch = async (data: SearchFormValues) => {
    setisLoading(true);
    const tickets = await GetTicketsByNumber(data.ticketNumber);
    const queryParams = { number: data.ticketNumber };
    const queryString = qs.stringify(queryParams);

    if (tickets?.length) {
      router.push(`/tickets?${queryString}`);
    } else {
      toast({
        title: "Ticket ikke fundet.",
        description:
          "Kontroller venligst ticketnummeret og prøv igen.",
        variant: "destructive",
      });
    }
    setisLoading(false);
  };

  return (
      <Form {...form}>
        <form>
          <div className="flex gap-2 items-end">
            <FormField
              control={form.control}
              name="ticketNumber"
              render={({ field }) => (
                <FormItem>
                  <FormMessage />
                  <FormControl>
                    <Input placeholder="Søg ticketnummer..." {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="flex gap-2 items-center"
              variant={"default"}
              onClick={form.handleSubmit(onSubmitSearch)}
              disabled={isLoading}
            >
              { isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
              { isLoading ? "Søger..." : "Søg"}
            </Button>
            <Button
              type="submit"
              className="flex gap-2 items-center"
              variant={"outline"}
              onClick={() => router.push(`/tickets`)}
              disabled={isLoading}
            >
              Slet Søgning
            </Button>
          </div>
        </form>
      </Form> 
  );
};