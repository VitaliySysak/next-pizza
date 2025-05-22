import { Container, Filters, ProductsGroupList, SearchInput, Title, TopBar } from "@/src/components/shared";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/src/lib/find-pizzas";

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);
  console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <Container className="mt-8 hidden md:block">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        className="hidden sm:block"
        categories={categories.filter((category) => category.products.length > 0)}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px] lg:flex-row flex-col items-center lg:items-start">
          {/*Filtration*/}
          <div className="w-full px-10 lg:px-0 lg:w-[250px]">
            <Suspense>
              <div className="flex-1 md:hidden">
                <SearchInput />
              </div>
              <Filters />
            </Suspense>
          </div>

          {/*Goods list*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16 w-full">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
