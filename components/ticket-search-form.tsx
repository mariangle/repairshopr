"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { GetTicketsByNumber } from "@/actions/get-ticket-by-number";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import * as z from "zod";

const formSchema = z.object({
  ticketNumber: z
    .string()
    .min(2, { message: "Ticket number must be at least 2 characters long" })
    .regex(/^\d+$/, { message: "Ticket number must contain only numeric digits" }),
});

type SearchFormValues = z.infer<typeof formSchema>;

export const TicketSearchForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketNumber: "",
    },
  });

  const onSubmit = async (data: SearchFormValues) => {
    const tickets = await GetTicketsByNumber(data.ticketNumber);

    if (tickets?.length) {
      router.push(`/tickets/${tickets[0].id}`);
    } else {
      toast({
        title: "Ticket ikke fundet",
        description:
          "Beklager, den ticket du ledte efter blev ikke fundet. Kontroller venligst ticketnummeret og prøv igen.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 items-center"
    >
      <Input
        placeholder="Søg ticketnummer..."
        className={cn("")}  
        {...register("ticketNumber")}
      />
      {errors.ticketNumber && (
  <p className="text-red-500">{errors.ticketNumber.message}</p>
)}
      <Button variant={"secondary"} className="whitespace-nowrap">
        Slå Op
      </Button>
      <Button type="submit">Søg</Button>
    </form>
  );
};