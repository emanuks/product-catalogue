'use client';

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { CartProduct } from "../cart-product/cart-product";

export const CartProducts = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <div className="flex flex-col gap-3 w-full">
      {products.length === 0 ?
        <h2 className='text-center text-2xl text-gray-500'>
          Carrinho vazio!
        </h2> :
        <>
          {products.map((product) =>
            <CartProduct product={product} key={product.id} />
          )}
        </>
      }
    </div>
  );
}