import { Ticket } from "@/types/ticket";
import qs from "query-string";

interface Query {
  q?: string;
  number: string;
}

const URL=`${process.env.BASE_URL}/tickets`;

export const GetTickets = async (query?: Query) : Promise<Ticket[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      query: query?.q,
      number: query?.number
    }
  })

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: process.env.API_SECRET as string,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw new Error("An error occured.");
  }
}