"use client"

import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { Separator } from "@/components/ui/separator";
import { GetTickets } from "@/actions/get-tickets";

import * as react from "react"
import { Ticket } from "@/types/ticket";
import { useApiStore } from "@/hooks/use-api-store";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/use-store";
import { getTestData } from "@/actions/get-test-data";

interface IndexPageProps {
  searchParams: {
    query: string;
    number: string;
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ 
  searchParams 
}) => {  
  const router = useRouter();
  const apiStore = useStore(useApiStore, (store) => store);
    const [data, setData] = react.useState<Ticket[] | null>([])
  
  react.useEffect(() => {
    const fetchData = async () => {

      if (!apiStore) return null;

      if (apiStore.isTestUser) {
        const data = await getTestData();
        setData(data);
        return;
      }

      if (apiStore.isLogged) {
        const data = await GetTickets({
          q: searchParams.query,
          number: searchParams.number,
        }, {
          subdomain: apiStore.credentials.subdomain,
          apiKey: apiStore.credentials.apiKey
        });
        setData(data);
      } else {
        router.push("/login");
      }
    };
    fetchData();
  }, [apiStore?.isLogged]);

  if (!apiStore?.isLogged) return null;

  return (
    <div className="flex-1 flex-col space-y-8 p-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div className="w-full">
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <Separator className="mt-4"/>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  ) 
}

export default IndexPage;