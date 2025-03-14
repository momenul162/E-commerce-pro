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

const AttendanceReport: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-center text-2xl font-bold mb-6">Attendance Report</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-4 md:mb-0">
            <RadioGroup defaultValue="pos" className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pos" id="pos" />
                <Label htmlFor="pos">Attendance POS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="employee" id="employee" />
                <Label htmlFor="employee">Attendance Employee</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <Label className="block mb-1">From</Label>
              <Input type="text" defaultValue="7/ 4/2022" />
            </div>
            <div className="mb-4">
              <Label className="block mb-1">To</Label>
              <Input type="text" defaultValue="7/ 4/2022" />
            </div>
            <div className="mb-4">
              <Label className="block mb-1">Shop</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add more shop options here */}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <Label className="block mb-1">Employee</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ALL" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL</SelectItem>
                  {/* Add more employee options here */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button variant="outline" className="mr-2">
            <i className="fas fa-print mr-2"></i> Report
          </Button>
          <Button variant="outline">
            <i className="fas fa-home mr-2"></i> Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
