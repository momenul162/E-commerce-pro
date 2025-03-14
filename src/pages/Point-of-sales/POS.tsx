import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const PosPage = () => {
  return (
    <div className="lg:container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <i className="fas fa-bars text-2xl"></i>
          <h1 className="ml-2 text-xl font-bold">Point Of Sales</h1>
        </div>
        <Link to={"/"}>
          <X />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6">
              <Label>Barcode</Label>
              <Input type="text" placeholder="Barcode" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-2">
              <Label>Qty</Label>
              <Input type="number" placeholder="Quantity" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-2 flex items-center">
              <Label>Auto Scan</Label>
              <Checkbox className="mr-1" />
            </div>
            <div className="col-span-12 md:col-span-2">
              <Label>Rate</Label>
              <Input type="number" placeholder="Rate" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>Product</Label>
              <Input type="number" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>In Stock</Label>
              <Button variant={"outline"}>25</Button>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>Customer Id</Label>
              <Input type="number" placeholder="Customer id" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>Mobile</Label>
              <Input type="number" placeholder="Mobile" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>Attendant Id</Label>
              <Input type="number" placeholder="Attendant id" className="mt-1" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <Label>Name</Label>
              <Input type="number" placeholder="Name" className="mt-1" />
            </div>
          </div>
          <div className="bg-blue-200 text-center py-2 mt-2">
            <span className="text-sm">
              F1=Item Search, F8=Customer List, Ctrl+F8=New Customer, F9=Attendant List, F10=Paid
              amount, F11=Mode of pay, F12=C&amp;C
            </span>
          </div>
          <div className="overflow-x-auto mt-2">
            <Table className="min-w-full bg-white">
              <TableHeader>
                <TableRow className="bg-green-500 text-white">
                  <TableHead className="py-2 px-4 border">SL</TableHead>
                  <TableHead className="py-2 px-4 border">Barcode</TableHead>
                  <TableHead className="py-2 px-4 border">Product Description</TableHead>
                  <TableHead className="py-2 px-4 border">Rate</TableHead>
                  <TableHead className="py-2 px-4 border">Qty</TableHead>
                  <TableHead className="py-2 px-4 border">Disc</TableHead>
                  <TableHead className="py-2 px-4 border">Disc%</TableHead>
                  <TableHead className="py-2 px-4 border">Total (-dsc)</TableHead>
                  <TableHead className="py-2 px-4 border">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-green-200">
                  <TableCell className="py-2 px-4 border">2</TableCell>
                  <TableCell className="py-2 px-4 border">894116000795</TableCell>
                  <TableCell className="py-2 px-4 border">
                    CHIPS - SUN- GARLIC &amp; CHILLI 38G
                  </TableCell>
                  <TableCell className="py-2 px-4 border">30.00</TableCell>
                  <TableCell className="py-2 px-4 border">1.0000</TableCell>
                  <TableCell className="py-2 px-4 border">0.00</TableCell>
                  <TableCell className="py-2 px-4 border">0.00</TableCell>
                  <TableCell className="py-2 px-4 border">30.00</TableCell>
                  <TableCell className="py-2 px-4 border">
                    <i className="fas fa-caret-down"></i>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-2 px-4 border">1</TableCell>
                  <TableCell className="py-2 px-4 border">8941160034059</TableCell>
                  <TableCell className="py-2 px-4 border">
                    BISCUIT - BELLEAME-DIGESTIVE 100GM
                  </TableCell>
                  <TableCell className="py-2 px-4 border">30.00</TableCell>
                  <TableCell className="py-2 px-4 border">3.0000</TableCell>
                  <TableCell className="py-2 px-4 border">0.00</TableCell>
                  <TableCell className="py-2 px-4 border">0.00</TableCell>
                  <TableCell className="py-2 px-4 border">90.00</TableCell>
                  <TableCell className="py-2 px-4 border">
                    <i className="fas fa-caret-down"></i>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="overflow-x-auto mt-2">
            <Table className="min-w-full bg-white">
              <TableHeader>
                <TableRow className="bg-green-500 text-white">
                  <TableHead className="py-2 px-4 border">Hold Id</TableHead>
                  <TableHead className="py-2 px-4 border">Attendant</TableHead>
                  <TableHead className="py-2 px-4 border">Total Qty</TableHead>
                  <TableHead className="py-2 px-4 border">Total Items</TableHead>
                  <TableHead className="py-2 px-4 border">Total Amount</TableHead>
                  <TableHead className="py-2 px-4 border">Recall</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-2 px-4 border">shohid0101</TableCell>
                  <TableCell className="py-2 px-4 border">6.0000</TableCell>
                  <TableCell className="py-2 px-4 border">4</TableCell>
                  <TableCell className="py-2 px-4 border">195.000000</TableCell>
                  <TableCell className="py-2 px-4 border">
                    <i className="fas fa-caret-right"></i>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-between mt-2">
            <Button variant="outline">Apply Promotion</Button>
            <Button variant="outline">Print Last Invoice</Button>
          </div>
          <div className="flex justify-between mt-2">
            <Button variant="outline">Hold</Button>
            <Button variant="outline">Exchange</Button>
          </div>
          <div className="flex justify-between mt-2">
            <Input placeholder="#No of copies" type="text" className="w-full" />
          </div>
          <div className="flex justify-between mt-2">
            <Button variant="outline">F3 = Clear</Button>
            <Button variant="outline">Print & Submit</Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="bg-green-500 text-white text-center py-2 mb-2">
            <span className="text-xl font-bold">Paid Amt = 500</span>
          </div>
          <div className="bg-red-500 text-white text-center py-2 mb-2">
            <span className="text-xl font-bold">Change Amt = 380</span>
          </div>
          <div className="bg-white border border-gray-300 p-2 mb-2">
            <div className="flex justify-between mb-2">
              <span>Total Qty</span>
              <span>4</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>2</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Point Bal.</span>
              <span>0.00 Tk</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Point This Inv.</span>
              <span>0.00 Tk</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Point Redeem</span>
              <span>0 Tk</span>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-2 mb-2">
            <div className="flex justify-between mb-2">
              <span>Total Price</span>
              <span>120.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Disc. %</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Disc. Amnt</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Vat Amnt</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Excg Amnt</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Rounding</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2 bg-yellow-200 p-2">
              <span>Net Amount</span>
              <span>120</span>
            </div>
          </div>
          <div className="bg-white border border-gray-300 p-2 mb-2">
            <div className="flex justify-between mb-2">
              <span>Mode of Payment</span>
              <select className="border border-gray-300 p-1">
                <option>C&amp;C</option>
                <option>CASH</option>
              </select>
            </div>
            <div className="flex justify-between mb-2">
              <span>Cash Amnt</span>
              <span>120.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Card Amnt</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Pay Amount</span>
              <span>500.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Rtn Amount</span>
              <span>380.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-green-500 text-white p-2">
        <div className="flex items-center">
          <span>Shop : AM01 / ATIF SUPER MART</span>
          <span className="ml-4">Login By : shohid</span>
          <span className="ml-4">Counter : 01</span>
        </div>
        <div>
          <span>Version : Retail Master - 2.31.201.140</span>
        </div>
      </div>
    </div>
  );
};

export default PosPage;
