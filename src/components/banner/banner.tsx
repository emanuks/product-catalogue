import Image from "next/image";
import React from "react";

import bannerImg from "@/assets/images/banner.png";

export const Banner = () => {
	return (
		<section className="flex h-80 bg-gradient-to-r from-orange-400 to-orange-600 items-center gap-5 justify-between">
			<h1 className="text-4xl text-wrap text-white font-bold mx-24">
				Estilo e conforto para os seus pes
			</h1>
            <Image src={bannerImg} alt="" height={320} width={720} />
		</section>
	);
};
