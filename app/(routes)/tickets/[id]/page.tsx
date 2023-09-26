import { GetTicket } from "@/actions/get-ticket";

import { TicketInfo } from "./components/ticket-info";
import { CustomerInfo } from "./components/customer-info";

const Page = async ({ 
    params
  }: {
    params: { id: string }
  }) => {
    const ticket = await GetTicket(params.id);

    if (!ticket) return null;

    return (
      <div className="grid grid-cols-3 p-4">
        <div className="col-span-1 space-y-4">
          <TicketInfo ticket={ticket}/>
          <CustomerInfo customer={ticket.customer}/>
        </div>
        <div className="col-span-2">
          {ticket.subject}
        </div>
      </div>
    )
  }

export default Page;