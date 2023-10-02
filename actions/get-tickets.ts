import { Ticket } from "@/types/ticket";
import qs from "query-string";

interface Query {
  q?: string;
  number?: string;
}
type Credentials = {
  subdomain: string,
  apiKey: string,
}

export const GetTickets = async (query?: Query, credentials?: Credentials): Promise<Ticket[] | null> => {
  const url = qs.stringifyUrl({
    url: `https://${credentials?.subdomain}.repairshopr.com/api/v1/tickets`,
    query: {
      query: query?.q,
      number: query?.number
    }
  })

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: credentials?.apiKey as string,
      },
      ...{ next: { revalidate: 0 } },
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.tickets;
  } catch (error) {
    return null;
  }
}