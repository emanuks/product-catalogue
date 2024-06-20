import Image from "next/image";

import bannerImg from "../../../public/assets/images/banner.png";

export const Banner = () => {
	return (
		<section className="flex h-64 lg:h-80 bg-gradient-to-r from-orange-400 to-orange-600 items-center gap-5 justify-between">
			<h1 className="text-4xl lg:text-5xl text-wrap text-white font-bold text-center lg:text-start lg:mx-24">
				Estilo e conforto para os seus pes
			</h1>
			<Image src={bannerImg} alt="" height={320} width={720} className="hidden lg:block" />
		</section>
	);
};
