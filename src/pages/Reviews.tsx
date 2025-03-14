import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

interface Product {
  id: number;
  name: string;
  image: string;
  colorFamily: string;
  purchaseDate: string;
  seller: string;
}

const Reviews = () => {
  const toBeReviewed: Product[] = [
    {
      id: 1,
      name: "DFPlayer Mini MP3 Player Module For Arduino Black",
      image: "/placeholder.svg",
      colorFamily: "Black",
      purchaseDate: "2024-02-15",
      seller: "Arduino Store",
    },
    {
      id: 2,
      name: "0.96 INCH OLED LCD Display 0.96' Inches DC 3-5V 4 Pin Connections",
      image: "/placeholder.svg",
      colorFamily: "Not Specified",
      purchaseDate: "2024-02-10",
      seller: "Electronics Hub",
    },
    {
      id: 3,
      name: "J5019 HW-357 Boost Module DC DC Step Up Adjustable UPS 4.5-8V",
      image: "/placeholder.svg",
      colorFamily: "Not Specified",
      purchaseDate: "2024-02-05",
      seller: "Power Solutions",
    },
  ];

  const history: Product[] = [
    {
      id: 4,
      name: "12864 IIC LCD Module 128X64 I2C ST7567S COG Graphic Display",
      image: "/placeholder.svg",
      colorFamily: "काला",
      purchaseDate: "2024-01-20",
      seller: "Display Tech",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>

      <Tabs defaultValue="to-review" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="to-review"
            className={cn(
              "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent",
              "px-4 py-2 h-auto"
            )}
          >
            To Be Reviewed ({toBeReviewed.length})
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className={cn(
              "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent",
              "px-4 py-2 h-auto"
            )}
          >
            History ({history.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="to-review" className="mt-6">
          <div className="space-y-4">
            {toBeReviewed.map((product) => (
              <Card key={product.id} className="p-4">
                <div className="flex items-start gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Color Family: {product.colorFamily}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm">
                        <p>Purchased on {product.purchaseDate}</p>
                        <p>Sold by {product.seller}</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        REVIEW
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <div className="space-y-4">
            {history.map((product) => (
              <Card key={product.id} className="p-4">
                <div className="flex items-start gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Color Family: {product.colorFamily}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm">
                        <p>Purchased on {product.purchaseDate}</p>
                        <p>Sold by {product.seller}</p>
                      </div>
                      <Button variant="outline" className="text-gray-500">
                        View Review
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reviews;
