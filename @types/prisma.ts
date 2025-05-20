import { Ingredient, Prisma, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & { items: ProductItem[]; ingredients: Ingredient[] };

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
  include: {
    products: {
      include: {
        ingredients: true;
        items: true;
      };
    };
  };
}>;
