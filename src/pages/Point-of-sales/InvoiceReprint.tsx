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

const InvoiceReprint: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8">
        <CardHeader>
          <CardTitle className="mb-8 text-2xl font-bold text-center">Invoice Reprint</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label className="block mb-2 text-sm font-medium text-gray-700">From</Label>
              <Input type="text" className="w-full" defaultValue="7/4/2022" />
            </div>
            <div className="mb-4">
              <Label className="block mb-2 text-sm font-medium text-gray-700">To</Label>
              <Input type="text" className="w-full" defaultValue="7/4/2022" />
            </div>
            <div className="mb-4">
              <Button type="button" className="w-full">
                Next
              </Button>
            </div>
            <div className="mb-4">
              <Label className="block mb-2 text-sm font-medium text-gray-700">Select</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=""></SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center space-x-4">
              <Button type="button">
                <i className="fas fa-print mr-2"></i> Report
              </Button>
              <Button type="button">
                <i className="fas fa-home mr-2"></i> Back
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceReprint;
