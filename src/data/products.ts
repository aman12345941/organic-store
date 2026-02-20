import tomatoImg from "@/assets/products/tomato.jpg";
import appleImg from "@/assets/products/apple.jpg";
import milkImg from "@/assets/products/milk.jpg";
import spinachImg from "@/assets/products/spinach.jpg";
import bananaImg from "@/assets/products/banana.jpg";
import carrotImg from "@/assets/products/carrot.jpg";
import broccoliImg from "@/assets/products/broccoli.jpg";
import mangoImg from "@/assets/products/mango.jpg";

export type Category = "vegetables" | "fruits" | "milk";

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: Category;
  image: string;
  rating: number;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "tomato",
    name: "Fresh Tomatoes",
    price: 40,
    unit: "kg",
    category: "vegetables",
    image: tomatoImg,
    rating: 4.5,
    description: "Farm-fresh, juicy red tomatoes perfect for salads, curries, and sauces. Grown without pesticides in organic farms.",
    inStock: true,
  },
  {
    id: "spinach",
    name: "Baby Spinach",
    price: 30,
    unit: "bunch",
    category: "vegetables",
    image: spinachImg,
    rating: 4.3,
    description: "Tender baby spinach leaves, rich in iron and vitamins. Freshly harvested every morning from local farms.",
    inStock: true,
  },
  {
    id: "carrot",
    name: "Organic Carrots",
    price: 35,
    unit: "kg",
    category: "vegetables",
    image: carrotImg,
    rating: 4.6,
    description: "Crunchy, sweet organic carrots. Great for juicing, cooking, or snacking raw. Naturally grown.",
    inStock: true,
  },
  {
    id: "broccoli",
    name: "Fresh Broccoli",
    price: 60,
    unit: "kg",
    category: "vegetables",
    image: broccoliImg,
    rating: 4.4,
    description: "Nutrient-rich broccoli florets. Steamed, stir-fried, or added to soups — always delicious and healthy.",
    inStock: true,
  },
  {
    id: "apple",
    name: "Red Apples",
    price: 120,
    unit: "kg",
    category: "fruits",
    image: appleImg,
    rating: 4.7,
    description: "Crisp, sweet Shimla apples. Handpicked from high-altitude orchards for the best flavor and crunch.",
    inStock: true,
  },
  {
    id: "banana",
    name: "Ripe Bananas",
    price: 45,
    unit: "dozen",
    category: "fruits",
    image: bananaImg,
    rating: 4.2,
    description: "Perfectly ripe bananas, naturally sweet and energy-packed. Ideal for smoothies and breakfast bowls.",
    inStock: true,
  },
  {
    id: "mango",
    name: "Alphonso Mangoes",
    price: 200,
    unit: "kg",
    category: "fruits",
    image: mangoImg,
    rating: 4.9,
    description: "The king of fruits — premium Alphonso mangoes with an irresistible aroma and sweetness.",
    inStock: true,
  },
  {
    id: "milk",
    name: "Farm Fresh Milk",
    price: 50,
    unit: "litre",
    category: "milk",
    image: milkImg,
    rating: 4.8,
    description: "Pure, unprocessed cow milk delivered fresh from local dairy farms every morning. Rich and creamy.",
    inStock: true,
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
