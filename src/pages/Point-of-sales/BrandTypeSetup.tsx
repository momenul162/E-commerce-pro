import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

const BrandTypeSetup: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-4">Brand Type Setup</h1>
        <div className="flex">
          <div className="w-1/3 pr-4">
            <div className="mb-4">
              <Label htmlFor="brandId">Brand Id</Label>
              <Input type="text" id="brandId" defaultValue="0415" />
            </div>
            <div className="mb-4">
              <Label htmlFor="brandName">Brand Name</Label>
              <Input type="text" id="brandName" className="bg-blue-100" />
            </div>
          </div>
          <div className="w-2/3">
            <div className="overflow-auto h-64">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Brand Type Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-red-100">
                    <TableCell>0272</TableCell>
                    <TableCell>.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0255</TableCell>
                    <TableCell>AA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0167</TableCell>
                    <TableCell>ABBOTT</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0383</TableCell>
                    <TableCell>ACELABS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0025</TableCell>
                    <TableCell>ACI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0073</TableCell>
                    <TableCell>ACME</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0374</TableCell>
                    <TableCell>ACT II</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0039</TableCell>
                    <TableCell>ACTIVO</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0254</TableCell>
                    <TableCell>AG</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0401</TableCell>
                    <TableCell>AG FOOD</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0251</TableCell>
                    <TableCell>AKU</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0317</TableCell>
                    <TableCell>ALEX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0074</TableCell>
                    <TableCell>ALFa</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0323</TableCell>
                    <TableCell>ALL TIME</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="outline">
            <i className="fas fa-save mr-2"></i> Save
          </Button>
          <Button variant="outline">
            <i className="fas fa-trash mr-2"></i> Delete
          </Button>
          <Button variant="outline">
            <i className="fas fa-home mr-2"></i> Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandTypeSetup;
