import { useEffect, useState } from "react";

import { CategoryI } from "@/app/global.types";
import { CategoriesSearch } from "@/components/categories-search";
import HomeLoading from "@/app/(home)/loading";

export const SearchBox = () => {
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/emanuks/product-catalogue/categories")
      .then(res => res.json())
      .then(data =>{
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return (
    <aside className="hidden lg:flex flex-col gap-5 lg:w-1/4">
      <section className="bg-gray-50 p-3 rounded">
        <div className="bg-white p-3 rounded">
          <p className="text-lg font-bold">Categorias</p>
        
          {loading ? 
            <HomeLoading /> :
            <CategoriesSearch categories={categories} />
          }
        </div>
      </section>
    </aside>
  );
}