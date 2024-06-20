'use client';

import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { SearchIcon } from "@/utils/svg-icons";
import { CategoriesSearchProps } from "./categories-search.types";
import { CategoryI } from "@/app/global.types";
import { RootState } from "@/store/store";
import { addCategory, removeCategory } from "@/store/filterSlice";

export const CategoriesSearch = ({ categories }: CategoriesSearchProps) => {
  const [filteredCategories, setFilteredCategories] = useState<CategoryI[]>(categories);
  const selectedCategories = useSelector((state: RootState) => state.filter.filter.categories);
  
  const dispatch = useDispatch();
  const debounceSearch = debounce(setFilteredCategories, 500);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const newCategories = categories.filter(category => category.name.toLowerCase().includes(value.toLowerCase()));

    debounceSearch(newCategories);
  }

  const handleClick = (category: CategoryI) => {
    if (selectedCategories.some(selectedCategory => selectedCategory.id === category.id)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(addCategory(category));
    }
  }

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

      {!filteredCategories.length && <p className="text-gray-400 text-center">Nenhuma categoria encontrada.</p>}
      {filteredCategories.map(category => 
        <div 
          key={category.id}
          className="flex flex-row gap-3"
        >
          <input 
            type="checkbox" 
            id={category.id.toString()}
            checked={selectedCategories.some(selectedCategory => selectedCategory.id === category.id)}
            onChange={() => handleClick(category)}
          />
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