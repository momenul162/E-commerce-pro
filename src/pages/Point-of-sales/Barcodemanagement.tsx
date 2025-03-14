import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";
import { Checkbox } from "@/src/components/ui/checkbox";

const BarcodeManagement: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white border border-gray-300 p-4 w-full max-w-4xl">
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-blue-500 border-b-2 border-blue-500">
            Barcode
          </a>
          <a href="#" className="text-gray-500">
            Challan
          </a>
          <a href="#" className="text-gray-500">
            Package
          </a>
        </div>
        <div className="border-t-2 border-blue-500 mb-4"></div>
        <div className="bg-gray-200 p-2 mb-4 text-center">Select</div>
        <div className="space-y-4 mb-4">
          <div className="flex items-center">
            <Label htmlFor="barcode" className="w-1/4">
              Barcode
            </Label>
            <Input type="text" id="barcode" className="w-3/4" />
          </div>
          <div className="flex items-center">
            <Label htmlFor="description" className="w-1/4">
              Description
            </Label>
            <Input type="text" id="description" className="w-3/4" />
          </div>
          <div className="flex items-center">
            <Label htmlFor="quantity" className="w-1/4">
              No of Qty
            </Label>
            <Input type="text" id="quantity" className="w-3/4" />
          </div>
        </div>
        <div className="text-center mb-4">
          <Button variant="outline">Add</Button>
        </div>
        <div className="border border-gray-300 mb-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Barcode</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>RPU</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-yellow-50">
              {/* Rows will be dynamically added here */}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox id="small-barcode" className="mr-2" />
          <Label htmlFor="small-barcode">Small Barcode</Label>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Print</Button>
          <Button variant="outline">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default BarcodeManagement;
