import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Customer } from "@/types/customer";
import { createTableRow } from "@/components/ui/create-table-row";
import { User } from "lucide-react";

interface CustomerInfoProps {
  customer: Customer;
}

export const CustomerInfo: React.FC<CustomerInfoProps> = ({ customer }) => {
  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <CardTitle className="text-sm flex items-center gap-2">Customer <User className="w-4 h-4"/></CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="grid">
          <tbody className="pt-4">
            {createTableRow("Full Name", customer.fullname)}
            {createTableRow("Email", customer.email)}
            {createTableRow("Phone", customer.phone)}
            {createTableRow("Business", customer.business_name)}
            {createTableRow(
              "Address",
              `${customer.address} ${customer.city} ${customer.state}`
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
