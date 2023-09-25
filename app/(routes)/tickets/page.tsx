import { Test } from "@/components/test"
import { DataTable } from "./components/data-table"
import { Columns } from "./components/columns"

const FetchData = async () => {
  try {
    const response = await fetch("https://wwwcirbitdk.repairshopr.com/api/v1/tickets", {
      headers: {
        Authorization: `Teec2ed7678c363492-37d177438541b14a9fe070276c41e86e`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.tickets;
  } catch (error) {
    console.error("Error fetching data:", error);
  }}
export default async function DemoPage() {
  const data = await FetchData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={Columns} data={data}/>
      <Test />
    </div>
  ) 
}
