"use client"

import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { GetTickets } from "@/actions/get-tickets";

import * as react from "react"
import { Ticket } from "@/types/ticket";
import { useApiStore } from "@/hooks/use-api-store";
import { useRouter } from "next/navigation";
import { useStore } from "@/hooks/use-store";

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

      if (apiStore?.isLogged) {
        const tickets = await GetTickets({
          q: searchParams.query,
          number: searchParams.number,
        }, {
          subdomain: apiStore.credentials.subdomain,
          apiKey: apiStore.credentials.apiKey
        });
        setData(tickets);
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
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <p className="text-muted-foreground">
            Listen viser api'ens første side af ticket. Du kan søge på hvilken som helst ticket.
          </p>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  ) 
}

export default IndexPage;