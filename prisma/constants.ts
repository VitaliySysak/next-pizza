export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Coffee",
  },
  {
    name: "Drinks",
  },
];

export const _ingredients = [
  {
    name: "Cheese Crust",
    price: 179,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/cheese-crust.webp",
  },
  {
    name: "Creamy Mozzarella",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/creamy-mozzarella.webp",
  },
  {
    name: "Cheddar and Parmesan Cheese",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/cheddar-parmesan.webp",
  },
  {
    name: "Spicy Jalapeño",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/spicy-jalapeno.webp",
  },
  {
    name: "Tender Chicken",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/tender-chicken.webp",
  },
  {
    name: "Mushrooms",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/mushrooms.webp",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/ham.webp",
  },
  {
    name: "Spicy Pepperoni",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/spicy-pepperoni.webp",
  },
  {
    name: "Hot Chorizo",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/hot-chorizo.webp",
  },
  {
    name: "Pickles",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/pickles.webp",
  },
  {
    name: "Fresh Tomatoes",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/fresh-tomato.webp",
  },
  {
    name: "Red Onion",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/red-onion.webp",
  },
  {
    name: "Juicy Pineapple",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/juicy-pineapple.webp",
  },
  {
    name: "Italian Herbs",
    price: 39,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/italian-herbs.webp",
  },
  {
    name: "Sweet Pepper",
    price: 59,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/sweet-pepper.webp",
  },
  {
    name: "Feta Cubes",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/feta-cubes.webp",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/ingredients/meet-balls.webp",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Hamon Salad",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/salads/hamon-salad.webp",
    categoryId: 2,
  },
  {
    name: "Caprese Salad",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/salads/caprese-salad.webp",
    categoryId: 2,
  },
  {
    name: "Cesare Salad",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/salads/cesare-salad.webp",
    categoryId: 2,
  },
  {
    name: "Shrimp Salad",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/salads/shrimp-salad.webp",
    categoryId: 2,
  },
  {
    name: "Coffee Latte",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/coffee/big-latte.webp",
    categoryId: 2,
  },
  {
    name: "Cappuccino",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/coffee/cappuccino.webp",
    categoryId: 3,
  },
  {
    name: "Ice Latte",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/coffee/ice-latte.webp",
    categoryId: 3,
  },
  {
    name: "Blue Matcha",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/coffee/big-latte.webp",
    categoryId: 3,
  },
  {
    name: "Frappe",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/coffee/frappe.webp",
    categoryId: 3,
  },
  {
    name: "Coca-Cola",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/drinks/cola-300x300.webp",
    categoryId: 4,
  },
  {
    name: "Sprite",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/drinks/sprite-300x300.webp",
    categoryId: 4,
  },
  {
    name: "Fanta",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/drinks/fanta-300x300.webp",
    categoryId: 4,
  },
  {
    name: "Rich Apple Juice",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/drinks/rich-apple-300x300.webp",
    categoryId: 4,
  },
];
