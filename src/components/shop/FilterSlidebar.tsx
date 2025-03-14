import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/src/components/ui/slider";

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  categories: string[];
  onResetFilters: () => void;
}

export const FilterSidebar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  categories,
  onResetFilters,
}: FilterSidebarProps) => {
  return (
    <aside className="w-full md:w-60 lg:w-72 space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Category</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 1000]}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Sort By</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" className="w-full" onClick={onResetFilters}>
        Reset Filters
      </Button>
    </aside>
  );
};
