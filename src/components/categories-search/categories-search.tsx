'use client';

import { ChangeEvent, useCallback, useState } from "react";

import { SearchIcon } from "@/utils/svg-icons";
import { CategoriesSearchProps } from "./categories-search.types";
import { CategoryI } from "@/app/global.types";
import { debounce } from "lodash";

export const CategoriesSearch = ({ categories }: CategoriesSearchProps) => {
  const [filteredCategories, setFilteredCategories] = useState<CategoryI[]>(categories);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const newCategories = categories.filter(category => category.name.toLowerCase().includes(value.toLowerCase()));

    debounceSearch(newCategories);
  }

  const debounceSearch = debounce(setFilteredCategories, 500);

  return (
    <div className="flex flex-col gap-2 mt-4">
    <label className="bg-gray-100 py-1 px-3 mb-4 rounded items-center">
      <input 
        placeholder="Pesquisar" 
        type="search" 
        className="focus:outline-orange-400 w-11/12" 
        onChange={handleSearch}
      />

      <SearchIcon className="fill-orange-500 w-4" />
    </label>

      {filteredCategories.map(category => 
        <div 
          key={category.id}
          className="flex flex-row gap-3"
        >
          <input type="checkbox" id={category.id.toString()} />
          <label 
            htmlFor={category.id.toString()}
            className="text-gray-500 hover:text-gray-600 cursor-pointer"
          >
            {category.name}
          </label>
        </div>
      )}
    </div>
  );
}