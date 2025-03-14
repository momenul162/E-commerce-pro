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
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";

const StockReport: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-6">Stock Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <div className="mb-2">
                <RadioGroup defaultValue="productWise">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <RadioGroupItem value="periodical" id="periodical" className="mr-2" />
                      <Label htmlFor="periodical">Stock Report (Periodical)</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="current" id="current" className="mr-2" />
                      <Label htmlFor="current">Stock Report (Current)</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="productWise" id="productWise" className="mr-2" />
                      <Label htmlFor="productWise">Stock Report Product Wise (Current)</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="supplierWise" id="supplierWise" className="mr-2" />
                      <Label htmlFor="supplierWise">Stock Report Supplier Wise (Current)</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <Label htmlFor="fromDate" className="mr-2">
                  From
                </Label>
                <Input type="text" id="fromDate" defaultValue="7/4/2022" />
              </div>
              <div className="flex items-center mb-4">
                <Label htmlFor="toDate" className="mr-2">
                  To
                </Label>
                <Input type="text" id="toDate" defaultValue="7/4/2022" />
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <div className="mb-4">
                  <Label htmlFor="supplier" className="block mb-1">
                    Supplier
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="ALL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ALL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="group" className="block mb-1">
                    Group
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="ALL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ALL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="product" className="block mb-1">
                    Product
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="ALL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ALL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="brand" className="block mb-1">
                    Brand
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="ALL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ALL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center">
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center">
                      <RadioGroupItem value="all" id="all" className="mr-2" />
                      <Label htmlFor="all" className="mr-4">
                        All
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="zero" id="zero" className="mr-2" />
                      <Label htmlFor="zero" className="mr-4">
                        Zero
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="nonZero" id="nonZero" className="mr-2" />
                      <Label htmlFor="nonZero">Non Zero</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button className="mr-2">
              <i className="fas fa-print mr-2"></i> Report
            </Button>
            <Button>
              <i className="fas fa-home mr-2"></i> Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockReport;
