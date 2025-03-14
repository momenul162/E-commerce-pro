import { ArrowRight, ShoppingBag, Truck, RotateCcw, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { featuredProducts } from "@/data/featuredProducts";
import { Header } from "@/components/Header/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { categories } from "@/data/categories";
import { bestSellingProducts } from "@/data/bestSellingProducts";
import { ProductCard } from "@/components/product-card/ProductCard";
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/News-letter/NewsLetter";
import Hero from "@/components/home/Hero";

const features = [
  {
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    title: "Premium Selection",
    description: "Carefully curated products that meet our high quality standards.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50 with express delivery options.",
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-primary" />,
    title: "Easy Returns",
    description: "30-day return policy with no questions asked.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: "24/7 Support",
    description: "Our team is always ready to help with any questions or concerns.",
  },
];

const Index = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const navigate = useNavigate();

  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 8, featuredProducts.length));
  };
  return (
    <div className="min-h-screen min-w-full bg-gray-50">
      <Header />

      {/* Hero Section */}
      <Hero />
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-primary mb-4">
            New Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Discover Our Latest Products
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Shop the latest trends with our curated collection of premium products.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Category Slider */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-primary">Shop by Category</h2>
            <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
              All Categories <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem
                  key={category.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    className={`${category.color} rounded-lg p-4 h-full cursor-pointer hover:scale-105 transition-transform duration-200`}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-primary text-center">
                      {category.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">
                Top Picks
              </span>
              <h2 className="text-2xl font-semibold text-primary mt-1">Best Selling Products</h2>
            </div>
            <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-primary">Featured Products</h2>
            <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, visibleProducts).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {visibleProducts < featuredProducts.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Features */}
      <section className="py-20 px-6 md:px-10 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight appear">Why Choose Us</h2>
            <p className="text-muted-foreground mt-4 appear appear-delay-100">
              We're committed to providing you with the best shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm appear appear-delay-200"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
