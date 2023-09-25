import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Ticket } from "@/types/ticket";
import { createTableRow } from "@/components/ui/create-table-row";
import { format } from "@/lib/format";

interface TicketInfoProps {
  ticket: Ticket;
}

export const TicketInfo: React.FC<TicketInfoProps> = ({ ticket }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-sm">TICKET INFO</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="grid grid-cols-3">
          <tbody className="pt-4">
            {createTableRow("Status", ticket.status)}
            {createTableRow("Asignee", ticket.user.full_name)}
            {createTableRow("Type", ticket.problem_type)}
            {createTableRow("Due Date", format(ticket.due_date))}
            {createTableRow("Created", format(ticket.created_at))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
