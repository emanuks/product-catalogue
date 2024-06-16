import Image from "next/image";

import { ProductCardProps } from "./product-card.types";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-between gap-1">
      <Image
        src={product.image}
        alt="Product Image"
        width={320}
        height={320}
        className="w-full h-80"
      />
      <p className="text-gray-500 my-2 text-sm">{product.categories.map(category => category.name).join(', ')}</p>
      <h3 className="text-xl h-16 truncate">{product.name}</h3>
      <p className="text-gray-500 line-through">De: R$ {product.fullPrice.toFixed(2)}</p>
      <h2 className="text-2xl font-bold">
        R$ {product.discountedPrice.toFixed(2)}
        <span className="text-orange-500 align-middle text-sm font-normal ml-2">
          {product.discount * 100}% OFF
        </span>
      </h2>

      <button className="my-8 border border-orange-500 rounded py-3 text-orange-500 hover:bg-orange-500 hover:text-white">
        Adicionar ao carrinho
      </button>
    </div>
  );
}