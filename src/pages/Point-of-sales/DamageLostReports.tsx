import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DamageLostReports: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Damage Lost Reports</h1>
        <form>
          <div className="mb-4">
            <RadioGroup defaultValue="summary" className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="summary" id="summary" />
                <Label htmlFor="summary">Summary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="details" id="details" />
                <Label htmlFor="details">Details</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="block mb-2">From</Label>
              <Input type="date" className="w-full" />
            </div>
            <div>
              <Label className="block mb-2">To</Label>
              <Input type="date" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="block mb-2">Supplier</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add supplier options here */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Group</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add group options here */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Product</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add product options here */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">Brand</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add brand options here */}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" type="button" className="flex items-center">
              <i className="fas fa-print mr-2"></i> Report
            </Button>
            <Button variant="outline" type="button" className="flex items-center">
              <i className="fas fa-home mr-2"></i> Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DamageLostReports;
