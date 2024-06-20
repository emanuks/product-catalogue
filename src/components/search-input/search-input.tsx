'use client';

import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { SearchIcon } from "@/utils/svg-icons";
import { RootState } from "@/store/store";
import { changeSearch } from "@/store/filterSlice";

export const SearchInput = () => {
  const search = useSelector((state: RootState) => state.filter.filter.search);
  const [currentSearch, setCurrentSearch] = useState(search);
  
  const dispatch = useDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    setCurrentSearch(value);
    debounceSearch(value);
  }

  const changeFilter = (value: string) => {
    dispatch(changeSearch(value))
  }

  const debounceSearch = debounce(changeFilter, 500);

  return (
    <label className="bg-gray-100 py-1 px-3 rounded items-center">
      <input 
        placeholder="Pesquisar" 
        type="search" 
        className="focus:outline-orange-400 w-11/12" 
        onChange={handleSearch}
        value={currentSearch}
      />

      <SearchIcon className="fill-orange-500 w-4" />
    </label>
  );
}