import { Suspense } from "react";

import { Banner } from "@/components/banner";
import { Catalogue } from "@/components/catalogue";

import HomeLoading from "./loading";

export default function Home() {
	return (
		<>
			<Banner />
			<Suspense fallback={<HomeLoading />}>
				<Catalogue />
			</Suspense>
		</>
	);
}
