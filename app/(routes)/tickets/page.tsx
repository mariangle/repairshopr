import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { GetTickets } from "@/actions/get-tickets";

interface IndexPageProps {
  searchParams: {
    query: string;
    number: string;
  }
}

const IndexPage: React.FC<IndexPageProps> = async ({ 
  searchParams 
}) => {  
  const data = await GetTickets({
    q: searchParams.query,
    number: searchParams.number
  });

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