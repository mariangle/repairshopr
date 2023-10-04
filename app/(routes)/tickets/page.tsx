import { Separator } from "@/components/ui/separator";
import { ClientTable } from "@/components/client-table";

interface IndexPageProps {
  searchParams: {
    query: string;
    number: string; 
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ 
  searchParams 
}) => {  
  
  return (
    <div className="flex-1 flex-col space-y-8 p-4 md:flex">
       <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <p className="text-muted-foreground">
            Overview of your recent tickets.
          </p>
        </div>
        <Separator className="my-6" />
      <ClientTable searchParams={searchParams}/>
    </div>
  ) 
}

export default IndexPage;