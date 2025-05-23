import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(",").map(Number);
  const sortBy = params.sortBy
  const pizzaTypes = params.pizzaTypes?.split(",").map(Number);
  const ingredientsIdArray = params.ingredients?.split(",").map(Number);

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const ingredientFilters = ingredientsIdArray
    ? ingredientsIdArray.map((ingredientId) => ({
        ingredients: {
          some: { id: ingredientId },
        },
      }))
    : [];

  const sizeAndTypeFilter = {
    items: {
      some: {
        size: sizes ? { in: sizes } : undefined,
        pizzaType: pizzaTypes ? { in: pizzaTypes } : undefined,
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
    },
  };

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: { id: "desc" },
        where: {
          AND: [...ingredientFilters, sizeAndTypeFilter],
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });

  return categories;
};
