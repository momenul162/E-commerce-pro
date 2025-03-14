import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const PurchaseOrderReports: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-8">
            Purchase Order Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <div className="mb-2">
                <RadioGroup defaultValue="summary">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <RadioGroupItem value="summary" id="summary" className="mr-2" />
                      <Label htmlFor="summary">Summary</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="details" id="details" className="mr-2" />
                      <Label htmlFor="details">Details</Label>
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
              <div className="border border-gray-300 p-4 rounded mb-4">
                <div className="flex items-center mb-2">
                  <Label htmlFor="supplier" className="w-24">
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
                <div className="flex items-center mb-2">
                  <Label htmlFor="group" className="w-24">
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
                <div className="flex items-center mb-2">
                  <Label htmlFor="product" className="w-24">
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
                <div className="flex items-center">
                  <Label htmlFor="brand" className="w-24">
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
              </div>
              <div className="flex justify-end space-x-4">
                <Button>
                  <i className="fas fa-print mr-2"></i> Report
                </Button>
                <Button>
                  <i className="fas fa-home mr-2"></i> Back
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseOrderReports;
