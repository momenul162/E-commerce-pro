import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Premium Shopping Experience",
    subtitle: "Discover our handpicked collection of quality products",
    cta: "Shop Now",
    link: "/products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "New Arrivals Every Week",
    subtitle: "Stay ahead with the latest trends and innovations",
    cta: "Explore New",
    link: "/new-arrivals",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Premium Quality",
    subtitle: "Crafted with attention to detail and excellence",
    cta: "Discover",
    link: "/products",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative h-full container mx-auto flex flex-col justify-center items-start px-6 md:px-10">
            <div className="max-w-xl space-y-6">
              <h1
                className={cn(
                  "text-4xl md:text-6xl font-bold text-white tracking-tight",
                  currentSlide === index ? "animate-[slideUp_0.6s_ease-out_forwards]" : "opacity-0"
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-white/90",
                  currentSlide === index
                    ? "animate-[slideUp_0.6s_0.1s_ease-out_forwards]"
                    : "opacity-0"
                )}
              >
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className={cn(
                  "inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium transition-all duration-300 hover:bg-white/90",
                  currentSlide === index
                    ? "animate-[slideUp_0.6s_0.2s_ease-out_forwards]"
                    : "opacity-0"
                )}
              >
                {slide.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 ",
              currentSlide === index ? "bg-white w-10" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
