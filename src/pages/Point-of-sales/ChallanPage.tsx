import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";

const ChallanPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-4xl">
        <div className="border-b border-gray-300 mb-4">
          <ul className="flex space-x-4">
            <li className="pb-2">
              <a href="#" className="text-gray-700">
                Barcode
              </a>
            </li>
            <li className="pb-2 border-b-2 border-blue-500">
              <a href="#" className="text-gray-700">
                Challan
              </a>
            </li>
            <li className="pb-2">
              <a href="#" className="text-gray-700">
                Package
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Label htmlFor="from-date" className="w-24">
              From Date
            </Label>
            <Input
              type="text"
              id="from-date"
              defaultValue="Monday, July 4, 2022"
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="to-date" className="w-24">
              To Date
            </Label>
            <Input
              type="text"
              id="to-date"
              defaultValue="Monday, July 4, 2022"
              className="w-full"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Next</Button>
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="challan" className="w-24">
              Challan
            </Label>
            <Input type="text" id="challan" className="w-full" />
          </div>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Barcode</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>RPU</TableHead>
                <TableHead>Select</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-yellow-50">{/* Add rows as needed */}</TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <Checkbox id="small-barcode" className="mr-2" />
            <Label htmlFor="small-barcode">Small Barcode</Label>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Print</Button>
            <Button variant="outline">Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallanPage;
