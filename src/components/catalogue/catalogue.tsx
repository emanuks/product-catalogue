import React from "react";

export const Catalogue = async () => {
	const response = await fetch(
		"https://my-json-server.typicode.com/emanuks/product-catalogue/products"
	);
	const products = await response.json();

	return (
		<section className="mx-24 my-10">
			<div className="flex flex-row justify-between mb-10">
				<p className="font-bold">{products.length} itens encontrados</p>
				<input placeholder="Pesquisar" />
			</div>

			<div className="flex flex-row gap-2">
				<aside className="w-1/4">Teste</aside>
				<div className="w-3/4">
					{products.map((product) => (
						<p key={product.id}>{product.name}</p>
					))}
				</div>
			</div>
		</section>
	);
};
