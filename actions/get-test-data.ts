import tickets from "@/data/tickets.json";
import { Ticket } from "@/types/ticket";

export function getTestData(): Promise<Ticket[]> {
  return Promise.resolve(tickets);
}
