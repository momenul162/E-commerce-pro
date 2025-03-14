import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

const Orders = () => {
  const orders = [
    {
      store: "Fashion Files",
      status: "Active",
      items: [
        {
          id: 1,
          name: "Stylish Slim-Fit Chinos In Stretch Twill Gabardine Pant For Men",
          price: 170,
          quantity: 1,
          image: "/placeholder.svg",
          details: "Color Family:Olive, Size:Waist:34",
        },
      ],
    },
    {
      store: "Daraz",
      status: "Processing",
      items: [
        {
          id: 2,
          name: "Teer Advanced Soyabean Oil - 5 Litre",
          price: 620,
          quantity: 1,
          image: "/placeholder.svg",
        },
        {
          id: 3,
          name: "Teer Advanced Soyabean Oil - 5 Litre",
          price: 620,
          quantity: 1,
          image: "/placeholder.svg",
        },
        {
          id: 4,
          name: "Teer Advanced Soyabean Oil - 5 Litre",
          price: 620,
          quantity: 1,
          image: "/placeholder.svg",
        },
        {
          id: 5,
          name: "Teer Advanced Soyabean Oil - 5 Litre",
          price: 620,
          quantity: 1,
          image: "/placeholder.svg",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-2 mb-6">
        <Package2 className="h-6 w-6" />
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent space-x-8">
          <TabsTrigger
            value="all"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="to-pay"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
          >
            To Pay
          </TabsTrigger>
          <TabsTrigger
            value="to-ship"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
          >
            To Ship
          </TabsTrigger>
          <TabsTrigger
            value="to-receive"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
          >
            To Receive
          </TabsTrigger>
          <TabsTrigger
            value="to-review"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-2"
          >
            To Review
          </TabsTrigger>
        </TabsList>

        <div className="py-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Show:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Orders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Package2 className="h-4 w-4" />
                    <span className="font-medium">{order.store}</span>
                  </div>
                  <Select defaultValue={order.status.toLowerCase()}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="ready">Ready</SelectItem>
                      <SelectItem value="shifted">Shifted</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="h-20 w-20 object-cover" />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        {item.details && (
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-medium">৳ {item.price}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="to-pay">
          <div className="text-center py-8 text-muted-foreground">No orders to pay</div>
        </TabsContent>

        <TabsContent value="to-ship">
          <div className="text-center py-8 text-muted-foreground">No orders to ship</div>
        </TabsContent>

        <TabsContent value="to-receive">
          <div className="text-center py-8 text-muted-foreground">No orders to receive</div>
        </TabsContent>

        <TabsContent value="to-review">
          <div className="text-center py-8 text-muted-foreground">No orders to review</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
