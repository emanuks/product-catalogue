import React from "react";

import { Header } from "@/components/header";
import { LayoutProps } from "../global.types";

const HomeLayout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default HomeLayout;
