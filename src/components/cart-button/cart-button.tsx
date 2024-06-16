import Link from "next/link";

export const CartButton = () => {
	return (
		<Link href="/cart" className="flex items-center">
			Carrinho
		</Link>
	);
};
