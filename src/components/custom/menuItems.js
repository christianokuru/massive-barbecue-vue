import chicken1 from '@/assets/images/Foods/chick.jpg';
import croaker from '@/assets/images/Foods/croak.jpg';
import turkey from '@/assets/images/Foods/turkey.jpg'; // Example path, change as needed
import catfish from '@/assets/images/Foods/catfish.jpg'; // Example path, change as needed
import mullet from '@/assets/images/Foods/croaker.jpg'; // Example path, change as needed

const menuItems = [
  {
    id: 1,
    name: "Barbecue Chicken",
    image: chicken1, 
    prices: [
      { name: "Regular", price: 5000 },
      { name: "Couple", price: 9000 },
      { name: "Family", price: 17500 },
    ],
    description: "Tender, juicy chicken marinated in a blend of smoky barbecue sauce and herbs, then grilled to perfection. A savory treat that packs all the flavor you crave."
  },
  {
    id: 2,
    name: "Turkey",
    image: turkey, 
    prices: [
      { name: "Regular", price: 8000 },
      { name: "Standard", price: 15000 },
      { name: "Large", price: 5000 },
    ],
    description: "Succulent turkey, expertly seasoned and grilled to a golden brown, offering a rich, smoky flavor that’s perfect for any special occasion or casual meal."
  },
  {
    id: 3,
    name: "Croaker Fish",
    image: croaker, 
    prices: [
      { name: "Mini", price: 6500 },
      { name: "Regular", price: 8500 },
      { name: "Standard", price: 10500 },
      { name: "Biggie", price: 13000 },
    ],
    description: "Freshly grilled croaker fish, delicately seasoned with a blend of spices and herbs, offering a mild yet flavorful taste that’s perfect for seafood enthusiasts."
  },
  {
    id: 4,
    name: "Catfish",
    image: catfish, 
    prices: [
      { name: "Mini", price: 5000 },
      { name: "Regular", price: 7000 },
      { name: "Standard", price: 10000 },
      { name: "Biggie", price: 15000 },
    ],
    description: "Grilled catfish with a smoky, rich flavor and tender flesh. A popular dish that offers the best of fresh fish with a deliciously unique taste."
  },
  {
    id: 5,
    name: "Mullet",
    image: mullet, 
    prices: [
      { name: "Small", price: 2300 },
      { name: "Medium", price: 3800 },
      { name: "Large", price: 5500 },
    ],
    description: "Mullet, delicately grilled and seasoned with a touch of aromatic spices. Known for its tender, flaky texture, it's a favorite for seafood lovers looking for a flavorful dish."
  },
];

export default menuItems;
