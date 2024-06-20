import Image from "next/image";

import { CartProductProps } from "./cart-product.types";
import { CartChange } from "../cart-change";

export const CartProduct = ({ product }: CartProductProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 w-full justify-center items-center">
      <Image src={product.image} width={150} height={150} alt="Product Image" />
      <div className="flex flex-col gap-3 w-full justify-evenly">
        <p className="text-xl lg:text-2xl truncate text-center lg:text-start">{product.name}</p>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:my-5">
          <p className="font-bold text-3xl lg:text-4xl">
            R$ {product.discountedPrice.toFixed(2)}
            <p className="font-normal text-base text-gray-500">
              ou <span className="text-orange-500">R$ {product.fullPrice.toFixed(2)}</span> a prazo
            </p>
          </p>
          <CartChange product={product} />
        </div>
      </div>
    </div>
  );
}