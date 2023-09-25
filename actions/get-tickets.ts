import { Ticket } from "@/types/ticket";

const url = process.env.BASE_URL + "/tickets"

export const GetTickets = async () : Promise<Ticket[]> => {
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
      throw error;
    }
}