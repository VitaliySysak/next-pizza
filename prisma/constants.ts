export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Sushi",
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
    name: "Caliphornia Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/caliphornia-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Cheese Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/cheese-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Chicken Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/chicken-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Crab Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/crab-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Filadelphid Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/filadelphia-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Toronto Sushi",
    imageUrl: "https://storage.googleapis.com/website-images-dev/next-pizza-images/sushi/toronto-sushi.webp",
    categoryId: 3,
  },
  {
    name: "Caramel Apple Milkshake",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryId: 4,
  },
  {
    name: "Oreo Cookie Milkshake",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryId: 4,
  },
  {
    name: "Classic Milkshake 👶",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryId: 4,
  },
  {
    name: "Irish Cappuccino",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryId: 5,
  },
  {
    name: "Caramel Cappuccino",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    name: "Coconut Latte",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    name: "Americano",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
];
