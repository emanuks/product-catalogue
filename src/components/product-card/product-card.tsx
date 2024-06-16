import Image from "next/image";

import { ProductCardProps } from "./product-card.types";
import Link from "next/link";

export const ProductCard = ({ product }: ProductCardProps) => {
  const categories = product.categories.map(category => category.name).join(', ');

  return (
    <div className="flex flex-col justify-between gap-1">
      <Link href={`/product/${product.id}`} className="hover:opacity-75">
        <Image
          src={product.image}
          alt="Product Image"
          width={320}
          height={320}
          className="w-full h-80 hover:cursor-pointer"
        />

        <p className="text-gray-500 my-2 text-sm">
          {categories}
        </p>

        <h3 className="text-xl h-10 truncate">
          {product.name}
        </h3>

        <p className="text-gray-400 line-through">
          De: R$ {product.fullPrice.toFixed(2)}
        </p>

        <h2 className="text-2xl font-bold">
          R$ {product.discountedPrice.toFixed(2)}
          <span className="text-orange-500 align-middle text-sm font-normal ml-2">
            {product.discount * 100}% OFF
          </span>
        </h2>
      </Link>

      <button className="my-8 border border-orange-500 rounded py-3 text-orange-500 hover:bg-orange-500 hover:text-white">
        Adicionar ao carrinho
      </button>
    </div>
  );
}