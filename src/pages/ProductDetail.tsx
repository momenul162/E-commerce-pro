import { useState } from "react";
import { Star, Minus, Plus, MapPin, Package, Wallet, RefreshCw, ShieldClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const handleAddToCart = () => {
    toast.success("Product has been added to your cart successfully");
  };

  const product = {
    name: "64Gb metal body Pen drive (USB 3.0)",
    description: "High-speed USB 3.0 flash drive with metal body construction",
    price: 589,
    originalPrice: 1299,
    discount: 55,
    rating: 4.5,
    reviews: 14,
    answeredQuestions: 4,
    brand: "No Brand",
    images: [
      "/lovable-uploads/00e7a864-7cc5-4169-a686-7556a4631293.png",
      "/lovable-uploads/00e7a864-7cc5-4169-a686-7556a4631293.png",
      "/lovable-uploads/00e7a864-7cc5-4169-a686-7556a4631293.png",
      "/lovable-uploads/00e7a864-7cc5-4169-a686-7556a4631293.png",
    ],
    variants: [
      { size: "128 GB", price: 899 },
      { size: "64 gb", price: 589 },
    ],
    delivery: {
      location: "Rajshahi, Rajshahi, Rajshahi Cantonment",
      fee: 150,
      type: "Standard Delivery",
      guarantee: "Guaranteed by 13-17 Feb",
      cashOnDelivery: true,
    },
    warranty: {
      returns: "7 Days Returns",
      warranty: "Warranty not available",
    },
    seller: {
      name: "Gadget E Store",
      positiveRatings: "76%",
      shipOnTime: "100%",
      chatResponse: "80%",
    },
    specifications: [
      "Adjustable range: 5-60kg",
      "Premium quality material used",
      "Ergonomic design for comfortable grip",
      "Non-slip handle",
      "Durable spring mechanism",
    ],
    customerReviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        date: "2024-02-15",
        comment: "Excellent product! Really helped improve my grip strength.",
      },
      {
        id: 2,
        name: "Sarah Smith",
        rating: 4,
        date: "2024-02-14",
        comment: "Good quality and comfortable to use. Would recommend.",
      },
      {
        id: 3,
        name: "Mike Johnson",
        rating: 5,
        date: "2024-02-13",
        comment: "Perfect for daily workouts. Very durable.",
      },
      {
        id: 4,
        name: "Emily Brown",
        rating: 4,
        date: "2024-02-12",
        comment: "Great product for the price. Easy to adjust.",
      },
      {
        id: 5,
        name: "David Wilson",
        rating: 5,
        date: "2024-02-11",
        comment: "Fantastic grip strengthener. Using it daily.",
      },
      {
        id: 6,
        name: "Lisa Anderson",
        rating: 4,
        date: "2024-02-10",
        comment: "Nice product, helps with my rehabilitation exercises.",
      },
      {
        id: 7,
        name: "Robert Taylor",
        rating: 5,
        date: "2024-02-09",
        comment: "Excellent build quality. Worth every penny.",
      },
      {
        id: 8,
        name: "Karen Martinez",
        rating: 4,
        date: "2024-02-08",
        comment: "Good grip trainer. Adjustable resistance is great.",
      },
      {
        id: 9,
        name: "James Lee",
        rating: 5,
        date: "2024-02-07",
        comment: "Perfect for building grip strength. Highly recommend.",
      },
      {
        id: 10,
        name: "Patricia Clark",
        rating: 4,
        date: "2024-02-06",
        comment: "Very satisfied with the purchase. Works as advertised.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-5">
          <div className="aspect-square rounded-lg overflow-hidden mb-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-md overflow-hidden border border-gray-200 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Product Details */}
        <div className="lg:col-span-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-blue-600">{product.reviews} Ratings</span>
            </div>
            <span className="text-blue-600">| {product.answeredQuestions} Answered Questions</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span>Brand:</span>
            <span className="text-blue-600">{product.brand}</span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold">৳{product.price}</span>
              <span className="text-gray-500 line-through">৳{product.originalPrice}</span>
              <span className="text-red-500">-{product.discount}%</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 mb-2">Color Family</div>
            <div className="flex gap-2">
              {product.variants.map((variant, index) => (
                <Button
                  key={index}
                  variant={index === 1 ? "default" : "outline"}
                  className="rounded-md"
                >
                  {variant.size}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 mb-2">Quantity</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Buy Now</Button>
            <Button onClick={handleAddToCart} className="flex-1 bg-orange-500 hover:bg-orange-600">
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Right Column - Delivery & Seller Info */}
        <div className="lg:col-span-3">
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Delivery Options</h3>
              <Button variant="ghost" size="sm" className="text-blue-600">
                CHANGE
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm">{product.delivery.location}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Package className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">{product.delivery.type}</p>
                  <p className="text-sm text-gray-500">{product.delivery.guarantee}</p>
                  <p className="text-sm">৳{product.delivery.fee}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Wallet className="w-5 h-5 text-gray-500" />
                <p>Cash on Delivery Available</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 mb-4">
            <h3 className="text-gray-600 mb-4">Return & Warranty</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <RefreshCw className="w-5 h-5 text-gray-500" />
                <p>{product.warranty.returns}</p>
              </div>
              <div className="flex gap-3">
                <ShieldClose className="w-5 h-5 text-gray-500" />
                <p>{product.warranty.warranty}</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <p className="text-gray-600">Sold by</p>
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{product.seller.name}</h3>
                <Button variant="outline" size="sm" className="text-blue-600">
                  Chat Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">{product.seller.positiveRatings}</p>
                <p className="text-sm text-gray-500">Positive Seller Ratings</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{product.seller.shipOnTime}</p>
                <p className="text-sm text-gray-500">Ship on Time</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{product.seller.chatResponse}</p>
                <p className="text-sm text-gray-500">Chat Response Rate</p>
              </div>
            </div>

            <Button className="w-full mt-4" variant="outline">
              GO TO STORE
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="prose max-w-none">
              <p>
                This adjustable hand grip is perfect for strengthening your grip and improving
                forearm strength. The ergonomic design ensures comfortable usage while the precision
                adjustment mechanism allows you to gradually increase resistance as you progress.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <ul className="space-y-2">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{product.rating}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500">Based on {product.reviews} reviews</span>
              </div>

              <div className="space-y-4">
                {product.customerReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{review.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
