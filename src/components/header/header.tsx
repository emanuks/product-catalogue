import React from "react";
import { Logo } from "@/components/logo";
import { CartButton } from "@/components/cart-button";

export const Header = () => {
	return (
		<header className="flex flex-row h-16 bg-white mx-32 justify-between">
			<Logo />
			<CartButton />
		</header>
	);
};
