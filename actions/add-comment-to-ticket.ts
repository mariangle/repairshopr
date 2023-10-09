import { Credentials } from "@/hooks/use-api-store";
import { Comment } from "@/types/comment";

export const AddCommentToTicket = async (id: string, credentials: Credentials, data: Comment) => {
  const url = `https://${credentials?.subdomain}.repairshopr.com/api/v1/tickets/${id}/comment`; 

  try {
    const response = await fetch(url, {
      method: 'POST',
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
