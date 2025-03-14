export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stock: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 142,
    isNew: true,
    isFeatured: true,
    stock: 25,
    description:
      "Experience unparalleled sound quality with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and premium materials for all-day comfort.",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 329.99,
    originalPrice: 399.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 98,
    isFeatured: true,
    stock: 12,
    description:
      "Stay connected with our latest smartwatch. Track your fitness, monitor your health, and stay connected with notifications all from your wrist.",
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    price: 1299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 64,
    isFeatured: true,
    stock: 5,
    description:
      "Capture moments with exceptional clarity. This professional-grade camera features 45MP resolution, 4K video capability, and comes with a versatile lens kit.",
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 89.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 37,
    isNew: true,
    stock: 30,
    description:
      "Illuminate your workspace with this elegant minimalist desk lamp. Features adjustable brightness, color temperature control, and a sleek design.",
  },
  {
    id: 5,
    name: "Premium Leather Backpack",
    price: 199.99,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 53,
    isFeatured: true,
    stock: 15,
    description:
      "Crafted from premium full-grain leather, this backpack combines style with functionality. Features laptop compartment, multiple pockets, and durable construction.",
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 49.99,
    originalPrice: 69.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1586816879360-099a22819a01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: 29,
    stock: 22,
    description:
      "Charge your devices effortlessly with this sleek wireless charging pad. Compatible with all Qi-enabled devices and features fast charging technology.",
  },
  {
    id: 7,
    name: "Designer Coffee Table",
    price: 349.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 18,
    isNew: true,
    stock: 8,
    description:
      "Elevate your living space with this designer coffee table. Featuring premium materials, minimalist design, and exceptional craftsmanship.",
  },
  {
    id: 8,
    name: "Ultra HD Smart TV",
    price: 999.99,
    originalPrice: 1299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 75,
    isFeatured: true,
    stock: 10,
    description:
      "Transform your entertainment experience with our Ultra HD Smart TV. Features stunning 4K resolution, HDR support, and integrated streaming services.",
  },
];

export interface User {
  id: number;
  name: string;
  email: string;
  role: "customer" | "admin" | "shop";
  avatar: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "customer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "shop",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export interface Order {
  id: number;
  user_id: number;
  products: { product_id: number; quantity: number; price: number }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  shipping_address: string;
  payment_method: string;
}

export const orders: Order[] = [
  {
    id: 101,
    user_id: 1,
    products: [
      { product_id: 1, quantity: 1, price: 299.99 },
      { product_id: 6, quantity: 2, price: 49.99 },
    ],
    total: 399.97,
    status: "shipped",
    date: "2023-10-15",
    shipping_address: "123 Main St, Anytown, USA",
    payment_method: "Credit Card",
  },
  {
    id: 102,
    user_id: 1,
    products: [{ product_id: 5, quantity: 1, price: 199.99 }],
    total: 199.99,
    status: "delivered",
    date: "2023-09-22",
    shipping_address: "123 Main St, Anytown, USA",
    payment_method: "PayPal",
  },
];

export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 201,
    product_id: 1,
    user_id: 1,
    rating: 5,
    comment: "Excellent sound quality and very comfortable to wear for long periods.",
    date: "2023-10-20",
  },
  {
    id: 202,
    product_id: 5,
    user_id: 1,
    rating: 4,
    comment: "Beautiful craftsmanship, spacious and stylish. Could use more inner pockets.",
    date: "2023-09-30",
  },
];
