import { Credentials } from "@/hooks/use-api-store";

export const GetUser = async (credentials: Credentials) => {
  const url = `https://${credentials.subdomain}.repairshopr.com/api/v1/me`; 

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: credentials.apiKey as string,
      },
    },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data
  } catch (error) {
    return null;
  }
};
