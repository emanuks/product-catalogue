import React from "react";

import { SearchInput } from "@/components/search-input";

import { ProductI } from "@/app/global.types";
import { ProductCard } from "../product-card";

export const Catalogue = async () => {
  const response = await fetch(
		"https://my-json-server.typicode.com/emanuks/product-catalogue/products"
	);
	const products: ProductI[] = await response.json();

	return (
		<section className="mx-10 lg:mx-24 my-10">
			<div className="flex flex-col lg:flex-row gap-3 justify-between mb-10">
				<p className="font-bold text-xl">{products.length} itens encontrados</p>
				<SearchInput />
			</div>

			<div className="flex flex-col lg:flex-row gap-x-2 gap">
				<aside className="lg:w-1/4">Teste</aside>
				<div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:w-3/4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};
