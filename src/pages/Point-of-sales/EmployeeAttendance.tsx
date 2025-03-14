import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";

const EmployeeAttendance: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 border border-gray-300 w-full max-w-4xl">
        <h1 className="text-center text-2xl font-bold mb-8">Employee Attendance</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <Label className="block mb-2">Employee Code</Label>
              <Input type="text" className="w-full" />
            </div>
            <div className="mb-4">
              <Label className="block mb-2">Employee Name</Label>
              <Input type="text" className="w-full" />
            </div>
            <div className="flex items-center mb-4">
              <span className="text-green-600 font-bold mr-2">IN :</span>
              <span className="text-green-600">00:00:00</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-red-600 font-bold mr-2">OUT</span>
              <span className="text-red-600">00:00:00</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="text-green-600 font-bold py-4">
                SIGN IN
              </Button>
              <Button variant="outline" className="text-red-600 font-bold py-4">
                SIGN OUT
              </Button>
            </div>
          </div>
          <div>
            <Table className="bg-amber-100">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>In Time</TableHead>
                  <TableHead>Out Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{/* Add rows as needed */}</TableBody>
            </Table>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button variant="outline" className="flex items-center">
            <i className="fas fa-home mr-2"></i> Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
