'use client';

import { ChangeEvent } from "react";

import { SearchIcon } from "@/utils/svg-icons";
import { debounce } from "@/utils/debounce";

import "./search-input.styles.css";

export const SearchInput = () => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const debounceSearch = debounce(() => { }, 500);
    debounceSearch();
  }

  return (
    <label className="bg-gray-100 py-1 px-3 rounded items-center">
      <input 
        placeholder="Pesquisar" 
        type="search" 
        className="focus:outline-orange-400 w-11/12" 
        onChange={handleSearch}
      />

      <SearchIcon className="fill-orange-500 w-4" />
    </label>
  );
}