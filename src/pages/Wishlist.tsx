import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Dabur Chyawanprash Awaleha 500 gm",
      price: 556,
      store: "Dabur",
      storeBadge: "Doraz Mall",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Kingfisher Wireless Mouse ( Black )",
      price: 80,
      store: "Digital shopper bd",
      details: "Color Family:Black",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Blackhead Remover Tool Acne Pimple Spot Extractor Pin - Silver",
      price: 50,
      store: "Chowdhury Store",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "FANTECH ZEUS X5S Gaming Mouse 4800 DPI RGB Wired Mouse USB 6 Button Macro For PUBG CS FPS Mouse",
      price: 1100,
      originalPrice: 1350,
      discount: 19,
      store: "Fantech",
      storeBadge: "Doraz Mall",
      details: "Color Family:Black",
      priceDropped: true,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6" />
          <h1 className="text-2xl font-bold">My Wishlist & Followed Stores (62)</h1>
        </div>
      </div>

      <Tabs defaultValue="wishlist" className="w-full">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="wishlist"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 pb-2"
          >
            My Wishlist (62)
          </TabsTrigger>
          <TabsTrigger
            value="past-purchases"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 pb-2"
          >
            Past Purchases
          </TabsTrigger>
          <TabsTrigger
            value="followed-stores"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 pb-2"
          >
            Followed Stores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wishlist" className="mt-4">
          <div className="bg-white p-4 mb-4 rounded-lg">
            <Button variant="link" className="text-blue-500 hover:text-blue-600">
              ADD ALL TO CART
            </Button>
          </div>

          <div className="bg-white p-4 rounded-lg mb-4">
            <h3 className="text-sm font-medium mb-4">Back in stock</h3>
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        {item.storeBadge && (
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mb-1">
                            {item.storeBadge}
                          </span>
                        )}
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {item.store}
                        </p>
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        {item.details && (
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        )}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">৳ {item.price}</span>
                          {item.originalPrice && (
                            <>
                              <span className="text-sm text-muted-foreground line-through">
                                ৳ {item.originalPrice}
                              </span>
                              <span className="text-sm text-red-500">-{item.discount}%</span>
                            </>
                          )}
                        </div>
                        {item.priceDropped && (
                          <p className="text-sm text-green-500">Price dropped</p>
                        )}
                      </div>
                      <Button>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="past-purchases">
          <div className="text-center py-8 text-muted-foreground">No past purchases</div>
        </TabsContent>

        <TabsContent value="followed-stores">
          <div className="text-center py-8 text-muted-foreground">No followed stores</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wishlist;
