import pizzaDoner from "@/assets/pizza-doner-malai.jpg";
import pizzaSupreme from "@/assets/pizza-supreme.jpg";
import broast from "@/assets/broast.jpg";
import burger from "@/assets/burger.jpg";
import wings from "@/assets/wings.jpg";
import shake from "@/assets/shake.jpg";
import brownie from "@/assets/brownie.jpg";
import karahi from "@/assets/karahi.jpg";

export type Branch = {
  slug: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string; // international format without +
  hours: string;
  features: string[];
  mapsQuery: string;
};

export const branches: Branch[] = [
  {
    slug: "sambrial",
    name: "Sambrial (Main)",
    address: "Near DSP Office, Wazirabad Road, Mor Sambrial, Sambrial, Punjab",
    phone: "0304-2251111",
    whatsapp: "923042251111",
    hours: "12:00 PM – 1:00 AM",
    features: ["Rooftop Dining", "Kids Playland", "Indoor & Outdoor", "Delivery"],
    mapsQuery: "Pizza Box Sambrial Wazirabad Road",
  },
  {
    slug: "adamkay",
    name: "Adamkay",
    address: "Sambrial Road, Adamke Cheema, Sialkot, Punjab",
    phone: "0342-0221111",
    whatsapp: "923420221111",
    hours: "1:00 PM – 12:30 AM",
    features: ["Dine-in", "Family Seating", "Delivery"],
    mapsQuery: "Pizza Box Adamke Cheema Sialkot",
  },
  {
    slug: "daska",
    name: "Daska",
    address: "College Road area, Daska, Sialkot, Punjab",
    phone: "0329-0221111",
    whatsapp: "923290221111",
    hours: "1:00 PM – 1:00 AM",
    features: ["Dine-in", "Lava Burger Specialty", "Delivery"],
    mapsQuery: "Pizza Box Daska College Road",
  },
  {
    slug: "sialkot",
    name: "Sialkot City",
    address: "Sialkot City — address to be confirmed",
    phone: "Coming soon",
    whatsapp: "923042251111",
    hours: "1:00 PM – 12:30 AM",
    features: ["Dine-in", "Delivery"],
    mapsQuery: "Pizza Box Sialkot",
  },
];

export type MenuItem = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Doner Malai Pizza",
    category: "Pizzas",
    description: "The cult favorite. Creamy malai sauce, tender doner chicken, stretchy mozzarella.",
    price: "PKR 1,150",
    image: pizzaDoner,
    badge: "Fan Favorite",
  },
  {
    name: "Chicken Supreme Pizza",
    category: "Pizzas",
    description: "Loaded chicken, capsicum, olives, jalapeños on our signature crust.",
    price: "PKR 1,299",
    image: pizzaSupreme,
  },
  {
    name: "Chicken Tikka Pizza",
    category: "Pizzas",
    description: "Desi tikka spice meets Italian dough. Smoky, saucy, seriously ours.",
    price: "PKR 1,199",
    image: pizzaSupreme,
  },
  {
    name: "BBQ Chicken Pizza",
    category: "Pizzas",
    description: "Sweet-smoky BBQ glaze, grilled chicken, red onions, coriander.",
    price: "PKR 1,249",
    image: pizzaSupreme,
  },
  {
    name: "Pattie Burger",
    category: "Burgers",
    description: "Classic crispy chicken pattie, fresh salad, secret Pizza Box sauce.",
    price: "PKR 350",
    image: burger,
  },
  {
    name: "Lava Burger",
    category: "Burgers",
    description: "Molten cheese lava center, double pattie, brioche bun. Daska specialty.",
    price: "PKR 650",
    image: burger,
    badge: "Daska Special",
  },
  {
    name: "Injected Chicken Broast",
    category: "Broast & Wings",
    description: "Marinated 24 hrs, injected with juices, fried to golden crunch.",
    price: "PKR 549",
    image: broast,
    badge: "Signature",
  },
  {
    name: "Hot Wings (6 pc)",
    category: "Broast & Wings",
    description: "Fiery, sticky, unstoppable. Served with dip.",
    price: "PKR 499",
    image: wings,
  },
  {
    name: "Chicken Karahi",
    category: "Desi Food",
    description: "Tomato, ginger, green chili, boneless chicken. Naan on the side.",
    price: "PKR 1,499",
    image: karahi,
  },
  {
    name: "Nutella Shake",
    category: "Shakes & Drinks",
    description: "Thick, chocolatey, whipped cream cloud on top.",
    price: "PKR 449",
    image: shake,
  },
  {
    name: "Blue Lagoon Mocktail",
    category: "Shakes & Drinks",
    description: "Refreshing blue citrus fizz. Cool down the heat.",
    price: "PKR 299",
    image: shake,
  },
  {
    name: "Brownie with Ice Cream",
    category: "Desserts",
    description: "Warm fudge brownie, vanilla scoop, chocolate drizzle.",
    price: "PKR 399",
    image: brownie,
  },
  {
    name: "Family Deal 1",
    category: "Deals",
    description: "1 Large Pizza + 2 Burgers + 2 Drinks. Feeds 4.",
    price: "PKR 2,499",
    image: pizzaSupreme,
    badge: "Best Value",
  },
  {
    name: "Rooftop Combo",
    category: "Deals",
    description: "1 Medium Pizza + 6 Wings + Fries + 2 Shakes.",
    price: "PKR 2,199",
    image: pizzaDoner,
  },
];

export const menuCategories = [
  "All",
  "Pizzas",
  "Burgers",
  "Broast & Wings",
  "Desi Food",
  "Shakes & Drinks",
  "Desserts",
  "Deals",
];

export const testimonials = [
  {
    quote:
      "The rooftop at night feels like you've been transported to a big vibrant city.",
    name: "Nazish Javaid",
  },
  {
    quote: "Taste, service and the ambiance — everything was great.",
    name: "Sarmad Hayat",
  },
  {
    quote:
      "The sitting area is very peaceful and comfortable, perfect for families and friends.",
    name: "Syed Hassan Zaidi",
  },
  { quote: "Best fast food place in town.", name: "Hiba Nehan" },
];

export function waLink(whatsapp: string, message?: string) {
  const text = encodeURIComponent(
    message ?? "Hi! I'd like to place an order from Pizza Box."
  );
  return `https://wa.me/${whatsapp}?text=${text}`;
}
