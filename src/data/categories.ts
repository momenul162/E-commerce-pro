export interface Category {
  id: number;
  name: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    color: "bg-blue-100",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    color: "bg-purple-100",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    color: "bg-green-100",
  },
  {
    id: 4,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    color: "bg-orange-100",
  },
  {
    id: 5,
    name: "Books",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    color: "bg-red-100",
  },
  {
    id: 6,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    color: "bg-pink-100",
  },
];
