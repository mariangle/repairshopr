import { Ticket } from "@/types/ticket";

export const GetTicketsByNumber = async (number: string): Promise<Ticket[] | null> => {
  const url = `${process.env.BASE_URL}/tickets?number=${number}`; 

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
    return data.tickets
  } catch (error) {
    return null;
  }
};
