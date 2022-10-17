// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 14.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips, green leaf lettuce, tomato and American cheese. Also available on a multigrain bun.",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 15.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 14.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Fresh mozzarella, fresh basil, homemade margherita sauce topped with olive oild and garlic.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 15.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "If onions, tomatoes, jalapeno, and capsicum are your favorite pizza toppings, you will surely fall in love with Domino’s Mexican green wave pizza. This lip-smacking pizza is an absolute treat and perfect to have on any occasion.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 14.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "American-style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun. Choose as many toppings as you want.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 15.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Sesame seed bun, Quarter Pounder beef patty, cheddar cheese, lettuce, tomato, onion, mustard, ketchup.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 17.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "A fiery mix of prawns and cuttlefish, accompanied by bell peppers and onions, layered with a double layer of mozzarella cheese.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 13.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Topped with Mozzarella Cheese",
  },

  {
    id: "09",
    title: "Mushroom Pizza",
    price: 15.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Mushrooms add mild, earthy flavor and tasty texture to pizzas of any variety, from meat to vegetarian.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 13.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Fresh, hand-formed patties hot off the grill and placed on a soft, toasted sesame seed bun. Choose as many toppings as you want.",
  },

  {
    id: "11",
    title: "Multigrain Bread ",
    price: 7.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Multigrain bread is a type of bread prepared with two or more types of grain. Grains used include barley, flax, millet, oats, wheat, and whole-wheat flour, among others.",
  },

  {
    id: "12",
    title: "Loaf of Bread ",
    price: 8.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Fresh Italian Bread",
  },

  {
    id: "13",
    title: "Sourdough Bread ",
    price: 9.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Sourdough is naturally leavened bread, which means it doesn’t use commercial yeast to rise. Instead, it uses a ‘starter’ – a fermented flour and water mixture that contains wild yeast and good bacteria – to rise.",
  },
];

export default products;
