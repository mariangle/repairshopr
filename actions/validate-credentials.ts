export const ValidateCredentials = async (subdomain: string, apiKey: string) => {
  const url = `https://${subdomain}.repairshopr.com/api/v1/tickets`; 

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey as string,
      },
    },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
    return null;
  }
};
