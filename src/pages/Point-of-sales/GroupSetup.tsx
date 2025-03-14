import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

const GroupSetup = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-center text-2xl font-bold mb-4">Group Setup</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="mb-4">
              <Label>Group Id</Label>
              <Input type="text" placeholder="group id" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label>Group Name</Label>
              <Input type="text" placeholder="group name" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label>Floor Id</Label>
              <Input type="text" placeholder="Floor Id" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label>Vat %</Label>
              <Input type="text" placeholder="vat" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label>Disc %</Label>
              <Input type="text" placeholder="Discount" className="mt-1" />
            </div>
            <div className="mb-4">
              <Label>Cost on Sale %</Label>
              <Input type="text" placeholder="Cost on Sale" className="mt-1" />
            </div>
          </div>
          <div className="w-full md:w-1/2 overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead>Group ID</TableHead>
                  <TableHead>Group Name</TableHead>
                  <TableHead>Floor ID</TableHead>
                  <TableHead>VAT Prcnt</TableHead>
                  <TableHead>Disc Prcnt</TableHead>
                  <TableHead>Cost On S</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>05</TableCell>
                  <TableCell>BABY FOOD & CARE</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>07</TableCell>
                  <TableCell>CHOCOLATE & CANDY</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01</TableCell>
                  <TableCell>COOKING ESSENTIALS</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>04</TableCell>
                  <TableCell>DRINKS & BEVERAGES</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11</TableCell>
                  <TableCell>FOOD</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02</TableCell>
                  <TableCell>MILK & DAIRY PRODUCTS</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12</TableCell>
                  <TableCell>NOODLES & PASTA</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13</TableCell>
                  <TableCell>OTHERS</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>08</TableCell>
                  <TableCell>SAUCE, PICKLES & OTHER</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow className="bg-red-100">
                  <TableCell>03</TableCell>
                  <TableCell>SNAKS & COOKIES</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>09</TableCell>
                  <TableCell>SPREADS</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>06</TableCell>
                  <TableCell>STATIONERY</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>TOILETRIES</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                  <TableCell>0.0000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="outline" className="flex items-center">
            <i className="fas fa-save mr-2"></i> Save
          </Button>
          <Button variant="outline" className="flex items-center">
            <i className="fas fa-trash-alt mr-2"></i> Delete
          </Button>
          <Button variant="outline" className="flex items-center">
            <i className="fas fa-home mr-2"></i> Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroupSetup;
