import butterChicken from '../assets/butterchicken.webp';
import { MdTableBar } from 'react-icons/md'; // Import the necessary React icons

export const popularDishes = [
  {
    id: 1,
    image: butterChicken,
    name: 'Butter Chicken',
    numberOfOrders: 250,
  }
];

export const tables = [
  { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 }
];

export const startersItem = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 250,
    category: "Vegetarian"
  }
];

export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian"
  }
];

export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot"
  }
];

export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian"
  }
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian"
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian"
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic"
  }
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian"
  }
];

export const menus = [
  { id: 1, name: "Starters", bgColor: "#b73e3e", icon: "🍲", items: startersItem }
];

export const metricsData = [
  { title: "Revenue", value: "₹50,846.90", percentage: "12%", color: "#025cca", isIncrease: false }
];

export const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false }
];

export const orders = [
  {
    id: "101",
    customer: "Amrit Raj",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  }
];

export const buttons = [
  { label: "Add Table", icon: MdTableBar, action: "table" } // Use the imported icon component
];

export const tabs = ["Metrics", "Orders", "Payments"];