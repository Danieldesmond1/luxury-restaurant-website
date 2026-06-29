import wagyu from "../assets/images/wagyu.jpg";
import lobster from "../assets/images/lobster.jpg";
import trufflePasta from "../assets/images/truffle-pasta.jpg";
import dessert from "../assets/images/dessert.jpg";

const foods = [
  {
    id: 1,
    name: "Japanese A5 Wagyu",
    category: "Chef's Recommendation",
    description:
      "Miyazaki Wagyu with roasted vegetables, black truffle butter and red wine reduction.",
    price: "$145",
    rating: 5,
    image: wagyu,
  },

  {
    id: 2,
    name: "Atlantic Lobster",
    category: "Seafood",
    description:
      "Butter-poached lobster with saffron risotto and fresh herbs.",
    price: "$110",
    rating: 5,
    image: lobster,
  },

  {
    id: 3,
    name: "Black Truffle Pasta",
    category: "Italian",
    description:
      "Fresh handmade pasta tossed with shaved black truffle and parmesan cream.",
    price: "$85",
    rating: 5,
    image: trufflePasta,
  },

  {
    id: 4,
    name: "Chocolate Soufflé",
    category: "Dessert",
    description:
      "Warm chocolate soufflé served with Madagascan vanilla bean ice cream.",
    price: "$42",
    rating: 5,
    image: dessert,
  },
];

export default foods;