import React, { ReactNode } from "react";

import { Header } from "@/components/header";

interface HomeLayoutProps {
	children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default HomeLayout;
