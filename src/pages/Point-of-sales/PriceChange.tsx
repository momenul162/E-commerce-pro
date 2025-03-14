import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

const PriceChange: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-4xl p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-center">Price Change</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Download</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Barcode</Label>
                <Input type="text" className="w-full" />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">Description</Label>
                <Input type="text" className="w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Stock Qty</Label>
                <Input type="text" className="w-full" />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">CPU</Label>
                <Input type="text" className="w-full" />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">RPU</Label>
                <Input type="text" className="w-full" />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button>
                <i className="fas fa-save mr-2"></i> Save
              </Button>
              <Button>
                <i className="fas fa-home mr-2"></i> Back
              </Button>
            </div>
          </div>
          <div className="border p-4 mb-4">
            <div className="overflow-x-auto">
              <Table className="min-w-full bg-blue-100">
                <TableHeader>
                  <TableRow>
                    <TableHead className="border px-4 py-2">Barcode</TableHead>
                    <TableHead className="border px-4 py-2">Barcode2</TableHead>
                    <TableHead className="border px-4 py-2">Description</TableHead>
                    <TableHead className="border px-4 py-2">RPU</TableHead>
                    <TableHead className="border px-4 py-2">Cng RPU</TableHead>
                    <TableHead className="border px-4 py-2">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border px-4 py-2"></TableCell>
                    <TableCell className="border px-4 py-2"></TableCell>
                    <TableCell className="border px-4 py-2"></TableCell>
                    <TableCell className="border px-4 py-2"></TableCell>
                    <TableCell className="border px-4 py-2"></TableCell>
                    <TableCell className="border px-4 py-2"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Group</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ALL" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ALL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">Product</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ALL" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ALL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">Brand</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ALL" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ALL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">Barcode</Label>
                <Input type="text" className="w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label className="block text-sm font-medium mb-1">From</Label>
                <Input type="date" className="w-full" />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-1">To</Label>
                <Input type="date" className="w-full" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>
                <i className="fas fa-file-alt mr-2"></i> Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceChange;
