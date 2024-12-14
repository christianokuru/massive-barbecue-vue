import chicken1 from '@/assets/images/Foods/chicken1.jpg'
import croaker from '@/assets/images/Foods/croaker.jpg'

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken",
    image: chicken1, 
    prices: [
      { size: "Small", price: 1500 },
      { size: "Medium", price: 2500 },
      { size: "Large", price: 3500 },
    ],
  },
  {
    id: 2,
    name: "Beef Kebab",
    image: croaker, 
    prices: [
      { size: "Single Stick", price: 800 },
      { size: "Pack of 5", price: 3500 },
    ],
  },
  {
    id: 3,
    name: "Barbecue Ribs",
    image: chicken1, 
    prices: [
      { size: "Half Rack", price: 5000 },
      { size: "Full Rack", price: 8500 },
    ],
  },
  {
    id: 4,
    name: "Grilled Fish",
    image: chicken1, 
    prices: [
      { size: "Small", price: 3000 },
      { size: "Medium", price: 4500 },
      { size: "Large", price: 6000 },
    ],
  },
  {
    id: 5,
    name: "Veggie Skewers",
    image: chicken1, 
    prices: [
      { size: "Single Stick", price: 500 },
      { size: "Pack of 5", price: 2000 },
    ],
  },
];

export default menuItems;

