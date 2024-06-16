import React from "react";

import { ProductCard } from "@/components/product-card";
import { Product } from "./catalogue.types";

export const Catalogue = async () => {
	await new Promise(resolve => setTimeout(resolve, 2000));
	const response = await fetch(
		"https://my-json-server.typicode.com/emanuks/product-catalogue/products"
	);
	const products: Product[] = await response.json();

	return (
		<section className="mx-10 md:mx-24 my-10">
			<div className="flex flex-row justify-between mb-10">
				<p className="font-bold text-xl">{products.length} itens encontrados</p>
				<input placeholder="Pesquisar" />
			</div>

			<div className="flex flex-col md:flex-row gap-x-2 gap">
				<aside className="md:w-1/4">Teste</aside>
				<div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:w-3/4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};
