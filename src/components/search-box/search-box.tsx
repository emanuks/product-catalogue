import { CategoryI } from "@/app/global.types";
import { CategoriesSearch } from "@/components/categories-search";

export const SearchBox = async () => {
  const response = await fetch(
		"https://my-json-server.typicode.com/emanuks/product-catalogue/categories"
	);
	const categories: CategoryI[] = await response.json();

  return (
    <aside className="hidden lg:flex flex-col gap-5 lg:w-1/4">
      <section className="bg-gray-50 p-3 rounded">
        <div className="bg-white p-3 rounded">
          <p className="text-lg font-bold">Categorias</p>

          <CategoriesSearch categories={categories} />
        </div>
      </section>
    </aside>
  );
}