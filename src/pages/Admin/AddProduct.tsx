import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "@/layout/DashboardLayout";
import { toast } from "sonner";

// Product form schema
const formSchema = z.object({
  name: z.string().min(3, { message: "Product name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  sku: z.string().optional(),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number",
  }),
  salePrice: z
    .string()
    .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
      message: "Sale price must be a positive number or empty",
    })
    .optional(),
  stock: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Stock must be a non-negative number",
  }),
  weight: z
    .string()
    .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
      message: "Weight must be a positive number or empty",
    })
    .optional(),
  dimensions: z.object({
    length: z
      .string()
      .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Length must be a positive number or empty",
      })
      .optional(),
    width: z
      .string()
      .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Width must be a positive number or empty",
      })
      .optional(),
    height: z
      .string()
      .refine((val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 0), {
        message: "Height must be a positive number or empty",
      })
      .optional(),
  }),
  tags: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AddProduct = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      sku: "",
      price: "",
      salePrice: "",
      stock: "0",
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      tags: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    console.log("Images:", images);

    // Here you would typically send this data to your API
    // For this example, we'll just display a success toast
    toast.success(`${data.name} has been successfully added.`);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...fileArray]);
      setImageUrls((prev) => [...prev, ...newImageUrls]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));

    // Release the object URL to prevent memory leaks
    URL.revokeObjectURL(imageUrls[index]);
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
    "Health",
    "Grocery",
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Add Product</h1>
          <p className="text-muted-foreground">
            Add a new product to your inventory with complete details
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your product..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sku"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>SKU</FormLabel>
                            <FormControl>
                              <Input placeholder="SKU or product code" {...field} />
                            </FormControl>
                            <FormDescription>Unique identifier for your product</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Regular Price*</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                <Input type="text" placeholder="0.00" className="pl-7" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="salePrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sale Price</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                <Input type="text" placeholder="0.00" className="pl-7" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stock Quantity*</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Shipping Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Shipping Information</h3>

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="0.00" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="dimensions.length"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Length (cm)</FormLabel>
                              <FormControl>
                                <Input placeholder="0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dimensions.width"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Width (cm)</FormLabel>
                              <FormControl>
                                <Input placeholder="0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dimensions.height"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Height (cm)</FormLabel>
                              <FormControl>
                                <Input placeholder="0.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tags</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter tags separated by commas..." {...field} />
                          </FormControl>
                          <FormDescription>
                            Help customers find your product (e.g., wireless, bluetooth, headphones)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto">
                      Create Product
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar for Images */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Product Images</h3>

                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      id="product-images"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />
                    <label
                      htmlFor="product-images"
                      className="cursor-pointer flex flex-col items-center justify-center py-4"
                    >
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">Drag & drop image here</p>
                      <p className="text-xs text-muted-foreground">or click to browse files</p>
                    </label>
                  </div>

                  {imageUrls.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {imageUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-24 object-cover rounded-md"
                          />
                          <button
                            className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X size={14} />
                          </button>
                          {index === 0 && (
                            <span className="absolute bottom-1 left-1 bg-primary text-white text-xs py-0.5 px-2 rounded-sm">
                              Main
                            </span>
                          )}
                        </div>
                      ))}
                      {imageUrls.length < 8 && (
                        <label
                          htmlFor="product-images"
                          className="cursor-pointer border-2 border-dashed border-border rounded-md flex items-center justify-center h-24"
                        >
                          <Plus size={20} className="text-muted-foreground" />
                        </label>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Publishing</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      Draft
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Visibility</span>
                    <span className="text-sm">Public</span>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      Save Draft
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
