import { Cart } from "@/utils/svg-icons";
import Link from "next/link";

export const CartButton = () => {
	return (
		<Link href="/cart" className="flex items-center text-gray-500 gap-2 hover:opacity-75">
			<Cart className="w-4 fill-orange-500" />
			Carrinho
		</Link>
	);
};
