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
import { TagIcon } from "lucide-react";

interface TicketInfoProps {
  ticket: Ticket;
}

export const TicketInfo: React.FC<TicketInfoProps> = ({ ticket }) => {
  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <CardTitle className="text-sm flex items-center gap-2">Ticket <TagIcon className="w-4 h-4"/></CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="grid">
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
