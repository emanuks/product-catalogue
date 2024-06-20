'use client';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SearchInput } from "@/components/search-input";
import { ProductI } from "@/app/global.types";
import { ProductCard } from "../product-card";
import { SearchBox } from "../search-box";
import { RootState } from "@/store/store";
import HomeLoading from "@/app/(home)/loading";

export const Catalogue = () => {
	const filter = useSelector((state: RootState) => state.filter.filter);
	const [products, setProducts] = useState<ProductI[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchProducts();
	}, [filter]);

	const fetchProducts = () => {
		setLoading(true);
		const query = buildQuery()

		fetch(`https://my-json-server.typicode.com/emanuks/product-catalogue/products${query}`)
			.then(res => res.json())
			.then((data: ProductI[]) => {
				let newProducts = data;

				if (filter.categories.length) 
					newProducts = data.filter(
						product => product.categories.map(c => c.id).some(
							category => filter.categories.map(c => c.id).includes(category)
						)
					);

				setProducts(newProducts);
				setLoading(false);
			});
	}

	const buildQuery = () => {
		let query = "";
		if (filter.search) {
			query += `?name_like=${filter.search}`;
		}

		return query;
	}

	return (
		<section className="mx-10 lg:mx-24 my-10">
			<div className="flex flex-col lg:flex-row gap-3 justify-between mb-10">
				<p className="font-bold text-xl">{products.length} itens encontrados</p>
				<SearchInput />
			</div>

			<div className="flex flex-col lg:flex-row gap-x-5 gap">
				<SearchBox />

				<div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:w-3/4">
					{loading ? 
						<div className="col-span-3">
							<HomeLoading />
						</div> :
						<>
							{!products.length ?
								<p className="col-span-3 text-center text-gray-400">Nenhum produto encontrado.</p> :
								<>
									{products.map((product) => (
										<ProductCard key={product.id} product={product} />
									))}
								</>
							}
						</>	
					}
				</div>
			</div>
		</section>		
	);
};
