import { Suspense } from "react";

import { Banner } from "@/components/banner";
import { Catalogue } from "@/components/catalogue";
import { SearchInput } from "@/components/search-input";
import HomeLoading from "./loading";

export default function Home() {
	return (
		<>
			<Banner />
			<Suspense
				fallback={
					<section className="mx-10 md:mx-24 my-10">
						<div className="flex flex-row justify-between mb-10">
							<p className="font-bold text-xl">0 itens encontrados</p>
							<SearchInput />
						</div>

						<HomeLoading />
					</section>
				}
			>
				<Catalogue />
			</Suspense>
		</>
	);
}
