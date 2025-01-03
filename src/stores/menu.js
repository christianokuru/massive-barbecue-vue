import { defineStore } from "pinia";
import { reactive } from "vue";
import chicken1 from "@/assets/images/Foods/chick.jpg";
import croaker from "@/assets/images/Foods/croak.jpg";
import turkey from "@/assets/images/Foods/turkey.jpg";
import catfish from "@/assets/images/Foods/catfish.jpg";
import mullet from "@/assets/images/Foods/croaker.jpg";
import boli from "@/assets/images/Foods/boli1.jpg";
import spag1 from "@/assets/images/Foods/spag1.jpg";
import anotherSpag from "@/assets/images/Foods/2.png";
import chickenAndChips from "@/assets/images/Foods/chickenAndChips.jpg";

export const useMenuStore = defineStore("theMenu", () => {
  const theMenuItems = reactive([
    {
      id: 1,
      name: "Barbeque Chicken",
      image: chicken1,
      prices: [
        { name: "Regular", price: 5000 },
        { name: "Couple", price: 9000 },
        { name: "Family", price: 17500 },
      ],
      description:
        "Tender, juicy chicken marinated in a blend of smoky Barbeque sauce and herbs, then grilled to perfection. A savory treat that packs all the flavor you crave.",
    },
    {
      id: 2,
      name: "Turkey",
      image: turkey,
      prices: [
        { name: "Regular", price: 8000 },
        { name: "Standard", price: 15000 },
      ],
      description:
        "Succulent turkey, expertly seasoned and grilled to a golden brown, offering a rich, smoky flavor that’s perfect for any special occasion or casual meal.",
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
      description:
        "Freshly grilled croaker fish, delicately seasoned with a blend of spices and herbs, offering a mild yet flavorful taste that’s perfect for seafood enthusiasts.",
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
      description:
        "Grilled catfish with a smoky, rich flavor and tender flesh. A popular dish that offers the best of fresh fish with a deliciously unique taste.",
    },
    {
      id: 5,
      name: "Mullet",
      image: mullet,
      prices: [
        { name: "Standard", price: 7000 },
        { name: "Biggie", price: 12000 },
      ],
      description:
        "Mullet, delicately grilled and seasoned with a touch of aromatic spices. Known for its tender, flaky texture, it's a favorite for seafood lovers looking for a flavorful dish.",
    },
    {
      id: 6,
      name: "Sides",
      image: boli,
      prices: [
        { name: "Boli", price: 1200 },
        { name: "Fried Plantain", price: 1000 },
        { name: "Potato Chips", price: 700 },
        { name: "Coslow", price: 700 },
      ],
      description:
        "Enjoy classic Nigerian sides like boli (grilled plantain), fried plantain, crispy potato chips, and refreshing coleslaw.",
    },
    {
      id: 7,
      name: "Food Sides",
      image: spag1,
      prices: [
        { name: "Sauce and Rice", price: 2500 },
        { name: "Spahetti", price: 2500 },
      ],
      description:
        "Complete your meal with rich sauces, flavorful rice, and savory spaghetti.",
    },
    {
      id: 8,
      name: "Combos/Weekend Packs",
      image: anotherSpag,
      prices: [
        { name: "Catfish + Sauce + Plantain + Chips", price: 16000 },
        { name: "Catfish + Sauce + Red Paku + Plantain + Chips", price: 16000 },
        { name: "Turkey and Spahetti", price: 9000 },
        { name: "Chicken and Spahetti", price: 6500 },
      ],
      description:
        "A selection of hearty weekend combos, perfect for satisfying your cravings with a variety of delicious options.",
    },
    {
        id: 9,
        name: "Combos/Weekend Packs cont.",
        image: chickenAndChips,
        prices: [
          { name: "Mullet + Chicken + Plantain + Chips", price: 16000 },
          { name: "Croaker + Chicken + Plantain + Chips", price: 20000 },
          { name: "Mullet Box 4pcs", price: 20000 },
          { name: "Croaker Box", price: 30000 },
        ],
        description:
          "A selection of hearty weekend combos, perfect for satisfying your cravings with a variety of delicious options.",
      },
  ]);
  return { theMenuItems };
});
