"use client";

import { useState } from "react";
import { Input, Skeleton } from "@/shared/components/ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

type Item = FilterCheckboxProps;

interface CheckboxFiltersProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  selected?: Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  className,
  loading,
  onClickCheckbox,
  defaultValue,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}
        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll ? items.filter((items) => items.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items).slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={String(index)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};