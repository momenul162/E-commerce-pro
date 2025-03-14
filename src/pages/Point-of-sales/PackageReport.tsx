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

const PackageReport: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-lg p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center mb-6">Package Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="effective-date" className="font-semibold">
                Effective Date
              </Label>
              <Input type="text" id="effective-date" defaultValue="7/4/2022" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="expire-date" className="font-semibold">
                Expire Date
              </Label>
              <Input type="text" id="expire-date" defaultValue="7/4/2022" />
            </div>
            <div className="text-center">
              <Button variant="outline">Next</Button>
            </div>
            <div className="border border-gray-300 p-4 rounded">
              <Label className="font-semibold">Circular Status</Label>
              <div className="flex items-center justify-center space-x-8 mt-2">
                <RadioGroup defaultValue="active">
                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="inactive" />
                      <Label htmlFor="inactive">In Active</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-2">
              <RadioGroup defaultValue="packageNo">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="packageNo" id="packageNo" />
                    <Label htmlFor="packageNo">Package No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="details" id="details" />
                    <Label htmlFor="details">Details</Label>
                    <span className="ml-auto">CD No</span>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value=""></SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="summary" id="summary" />
                    <Label htmlFor="summary">Summary</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <Button>
                <i className="fas fa-print mr-2"></i>
                <span>Report</span>
              </Button>
              <Button>
                <i className="fas fa-home mr-2"></i>
                <span>Back</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageReport;
