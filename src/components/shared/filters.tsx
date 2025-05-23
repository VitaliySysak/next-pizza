"use client";

import React from "react";
import { useQueryFilters, useIngredients, useFilters } from "@/src/hooks";
import { Button, Input } from "@/src/components/ui";
import { Title, RangeSlider, CheckboxFiltersGroup } from "@/src/components/shared";
import { cn } from "@/src/lib/utils";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [openFilters, setOpenFilters] = React.useState(false);
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <>
      <Button variant="outline" className="w-32 mt-4 lg:hidden" onClick={() => setOpenFilters((prev) => !prev)}>Filters</Button>
      <div className={cn(className, "hidden lg:block", openFilters && "block mt-4")}>
        <Title text="Filtration" size="sm" className="mb-5 font-bold" />

        {/* Upper Checkbox */}
        <CheckboxFiltersGroup
          title="Dough type"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckbox={filters.setPizzaTypes}
          selected={filters.pizzaTypes}
          items={[
            { text: "Thin", value: "1" },
            { text: "Classic", value: "2" },
          ]}
        />

        <CheckboxFiltersGroup
          title="Sizes"
          name="sizes"
          className="mb-5"
          onClickCheckbox={filters.setSizes}
          selected={filters.sizes}
          items={[
            { text: "20 cm", value: "20" },
            { text: "30 cm", value: "30" },
            { text: "40 cm", value: "40" },
          ]}
        />

        {/* Price Filter */}
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
          <p className="font-bold mb-3">Price from/to:</p>
          <div className="flex gap-3 mb-5">
            <Input
              name="price from"
              type="number"
              placeholder="0"
              min={0}
              max={1000}
              value={filters.prices.priceFrom !== undefined ? String(filters.prices.priceFrom) : 0}
              onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
            />
            <Input
              type="number"
              min={100}
              max={1000}
              placeholder="1000"
              value={filters.prices.priceTo !== undefined ? String(filters.prices.priceTo) : 1000}
              onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
            />
          </div>

          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
            onValueChange={updatePrices}
          />
        </div>

        <CheckboxFiltersGroup
          title="Ingredients"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={filters.setSelectedIngredients}
          selected={filters.selectedIngredients}
        />
      </div>
    </>
  );
};
