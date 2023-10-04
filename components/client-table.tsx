"use client"

import { DataTable } from "@/app/(routes)/tickets/components/data-table";
import { columns } from "@/app/(routes)/tickets/components/columns";
import { LoadingScreen } from "@/components/loading";
import { Separator } from "@/components/ui/separator";
import { GetTickets } from "@/actions/get-tickets";

import * as react from "react"
import { Ticket } from "@/types/ticket";
import { useApiStore } from "@/hooks/use-api-store";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/use-store";
import { getTestData } from "@/actions/get-test-data";

interface ClientTableProps {
  searchParams: {
    query: string;
    number: string; 
  }
}

export const ClientTable: React.FC<ClientTableProps> = ({ searchParams }) => {  
  const router = useRouter();
  const apiStore = useStore(useApiStore, (store) => store);
    const [data, setData] = react.useState<Ticket[] | null>([])

    react.useEffect(() => {
      const fetchData = async () => {
        if (!apiStore) return;
  
        if (apiStore.isTestUser) {
          setData(await getTestData());
        } else if (apiStore.isLogged) {
          try {
            const fetchedData = await GetTickets(
              {
                q: searchParams.query,
                number: searchParams.number,
              },
              {
                subdomain: apiStore.credentials.subdomain,
                apiKey: apiStore.credentials.apiKey,
              }
            );
            setData(fetchedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          router.push('/login');
        }
      };
  
      fetchData();
    }, [apiStore, router, searchParams]);
  
  if (!apiStore) return <LoadingScreen />;

  return <DataTable data={data} columns={columns} />
}