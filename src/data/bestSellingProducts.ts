export interface BestSellingProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const bestSellingProducts: BestSellingProduct[] = [
  {
    id: 1,
    title: "Noise-Cancelling Earbuds",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smartwatch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666",
    category: "Accessories",
  },
  {
    id: 4,
    title: "Premium Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517914309068-f7b9f8ba9586",
    category: "Home & Living",
  },
];
