import { Ticket } from "@/types/ticket";
import { Credentials } from "@/hooks/use-api-store";
export const GetTicket = async (id: string, credentials: Credentials): Promise<Ticket | null> => {
  const url = `https://${credentials?.subdomain}.repairshopr.com/api/v1/tickets/${id}`; 

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: credentials?.apiKey as string,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.ticket
  } catch (error) {
    return null;
  }
};
