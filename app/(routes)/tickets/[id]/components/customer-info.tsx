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

interface CustomerInfoProps {
  customer: Customer;
}

export const CustomerInfo: React.FC<CustomerInfoProps> = ({ customer }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-sm">CUSTOMER INFO</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="grid grid-cols-3">
          <tbody className="pt-4">
            {createTableRow("Full Name", customer.fullname)}
            {createTableRow("Email", customer.email)}
            {createTableRow("Phone", customer.phone)}
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
