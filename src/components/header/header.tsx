import React from "react";

import { Logo } from "@/components/logo";
import { CartButton } from "@/components/cart-button";

export const Header = () => {
	return (
		<header className="flex flex-row h-16 bg-white px-3 lg:px-32 justify-between drop-shadow">
			<Logo />
			<CartButton />
		</header>
	);
};
