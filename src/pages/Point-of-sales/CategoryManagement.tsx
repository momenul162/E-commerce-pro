import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

const CategoryManagement: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-4 border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <Label htmlFor="categoryId">Category Id</Label>
              <Input type="text" id="categoryId" defaultValue="02" />
            </div>
            <div className="mb-4">
              <Label htmlFor="categoryName">Category Name</Label>
              <Input type="text" id="categoryName" defaultValue="Silver" />
            </div>
            <div className="mb-4">
              <Label htmlFor="pointValue">Point Value Per 100 Taka</Label>
              <Input type="text" id="pointValue" defaultValue="1.00" />
            </div>
            <div className="mb-4 flex items-center">
              <Label htmlFor="creditSales" className="mr-2">
                Is Credit Sales Allowed
              </Label>
              <Checkbox id="creditSales" className="mr-2" />
              <span>Y/N</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">
                <i className="fas fa-save mr-2"></i> Save
              </Button>
              <Button variant="outline">
                <i className="fas fa-trash-alt mr-2"></i> Delete
              </Button>
              <Button variant="outline">
                <i className="fas fa-home mr-2"></i> Back
              </Button>
            </div>
          </div>
          <div>
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead>ID</TableHead>
                  <TableHead>Catgry</TableHead>
                  <TableHead>Point Value</TableHead>
                  <TableHead>IsCreditSales</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>04</TableCell>
                  <TableCell>Credit Sales</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>True</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01</TableCell>
                  <TableCell>Gold</TableCell>
                  <TableCell>1.0000</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow className="bg-red-200">
                  <TableCell>03</TableCell>
                  <TableCell>Platinum</TableCell>
                  <TableCell>1.0000</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02</TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>1.0000</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
