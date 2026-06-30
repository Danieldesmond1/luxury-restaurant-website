import champagne from "../assets/images/wines/champagne-bottle.jpg";
import cocktail from "../assets/images/wines/luxury-signature-cocktail.jpg";
import pinot from "../assets/images/wines/pinot-noir-wine.jpg";
import redWine from "../assets/images/wines/red-wine-glass.jpg";

const wines = [
  {
    id: 1,
    image: champagne,
    name: "Dom Pérignon Vintage",
    type: "Champagne",
    year: "2013",
    price: "$420",
    pairing: "Japanese A5 Wagyu",
    description:
      "A luxurious vintage champagne offering elegant citrus notes, toasted brioche, and remarkable depth.",
  },

  {
    id: 2,
    image: pinot,
    name: "Burgundy Pinot Noir",
    type: "Red Wine",
    year: "2019",
    price: "$165",
    pairing: "Prime Wagyu Striploin",
    description:
      "Silky tannins with layers of cherry, raspberry and earthy complexity crafted for premium steaks.",
  },

  {
    id: 3,
    image: redWine,
    name: "Cabernet Reserve",
    type: "Sommelier Selection",
    year: "2018",
    price: "$190",
    pairing: "Lobster Thermidor",
    description:
      "Full-bodied richness balanced with blackcurrant, oak and subtle spice for unforgettable dining.",
  },

  {
    id: 4,
    image: cocktail,
    name: "Midnight Manhattan",
    type: "Signature Cocktail",
    year: "Exclusive",
    price: "$48",
    pairing: "Chef's Dessert",
    description:
      "A handcrafted cocktail infused with smoked bourbon, vermouth and citrus oils.",
  },
];

export default wines;