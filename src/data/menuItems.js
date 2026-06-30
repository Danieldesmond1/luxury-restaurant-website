import wagyu from "../assets/images/menu/wagyu-ribeye.jpg";
import steak from "../assets/images/menu/wagyu-steak.jpg";
import lobster from "../assets/images/menu/lobster-thermidor.jpg";
import salmon from "../assets/images/menu/grilled-salmon.jpg";
import pasta from "../assets/images/menu/truffle-pasta.jpg";
import linguine from "../assets/images/menu/seafood-linguine.jpg";
import burrata from "../assets/images/menu/burrata.jpg";
import caviar from "../assets/images/menu/caviar-canape.jpg";
import dessert from "../assets/images/menu/chocolate-sphere.jpg";
import brulee from "../assets/images/menu/creme-brulee.jpg";
import wine from "../assets/images/menu/red-wine.jpg";
import cocktail from "../assets/images/menu/signature-cocktail.jpg";

const menuItems = [

{
id:1,
name:"Japanese A5 Wagyu",
category:"Signature",
price:"$165",
rating:"4.9",
chefChoice:true,
time:"25 min",
calories:"620 kcal",
image:wagyu,
description:"Authentic Miyazaki A5 Wagyu finished with black truffle butter."
},

{
id:2,
name:"Prime Wagyu Striploin",
category:"Signature",
price:"$150",
rating:"4.8",
chefChoice:false,
time:"20 min",
calories:"580 kcal",
image:steak,
description:"Premium Wagyu grilled over charcoal with roasted vegetables."
},

{
id:3,
name:"Lobster Thermidor",
category:"Seafood",
price:"$125",
rating:"4.9",
chefChoice:true,
time:"30 min",
calories:"560 kcal",
image:lobster,
description:"Fresh Atlantic lobster baked in creamy parmesan sauce."
},

{
id:4,
name:"Grilled Norwegian Salmon",
category:"Seafood",
price:"$95",
rating:"4.8",
chefChoice:false,
time:"18 min",
calories:"470 kcal",
image:salmon,
description:"Served with asparagus, lemon butter and seasonal herbs."
},

{
id:5,
name:"Black Truffle Pasta",
category:"Pasta",
price:"$88",
rating:"4.9",
chefChoice:true,
time:"18 min",
calories:"540 kcal",
image:pasta,
description:"Homemade pasta tossed with shaved black truffle."
},

{
id:6,
name:"Seafood Linguine",
category:"Pasta",
price:"$82",
rating:"4.7",
chefChoice:false,
time:"20 min",
calories:"510 kcal",
image:linguine,
description:"Fresh mussels, shrimp and scallops in white wine sauce."
},

{
id:7,
name:"Italian Burrata",
category:"Starter",
price:"$42",
rating:"4.8",
chefChoice:false,
time:"10 min",
calories:"320 kcal",
image:burrata,
description:"Creamy burrata served with tomatoes and basil oil."
},

{
id:8,
name:"Imperial Caviar Canapés",
category:"Starter",
price:"$78",
rating:"4.9",
chefChoice:true,
time:"12 min",
calories:"280 kcal",
image:caviar,
description:"Premium caviar served on handcrafted brioche."
},

{
id:9,
name:"Chocolate Sphere",
category:"Dessert",
price:"$35",
rating:"4.9",
chefChoice:true,
time:"10 min",
calories:"410 kcal",
image:dessert,
description:"Warm chocolate poured over a handcrafted cocoa sphere."
},

{
id:10,
name:"Vanilla Crème Brûlée",
category:"Dessert",
price:"$28",
rating:"4.8",
chefChoice:false,
time:"8 min",
calories:"350 kcal",
image:brulee,
description:"Classic French custard finished with caramelized sugar."
},

{
id:11,
name:"Reserve Cabernet",
category:"Wine",
price:"$95",
rating:"4.9",
chefChoice:false,
time:"Served chilled",
calories:"220 kcal",
image:wine,
description:"A bold reserve red selected by our sommelier."
},

{
id:12,
name:"Signature Gold Cocktail",
category:"Cocktail",
price:"$38",
rating:"4.8",
chefChoice:true,
time:"5 min",
calories:"180 kcal",
image:cocktail,
description:"House-crafted cocktail infused with citrus and edible gold."
}

];

export default menuItems;