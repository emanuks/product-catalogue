'use client';

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { AddToCardButtonProps } from "./add-to-cart-button.types";
import { addToCart, removeFromCart } from "@/store/cartSlice";

export const AddToCartButton = ({ product }: AddToCardButtonProps) => {
  const products = useSelector((state: RootState) => state.cart.products);
  const isPresent = products.some(p => p.id === product.id);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (isPresent) {
      const currentQuantity = products.find(p => p.id === product.id)?.quantity;

      dispatch(removeFromCart({ ...product, quantity: currentQuantity }));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  }

  return (
    <button
      className="mb-8 mt-4 lg:my-8 border border-orange-500 rounded py-3 text-orange-500 hover:bg-orange-500 hover:text-white"
      onClick={handleAddToCart}
    >
      {isPresent ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
    </button>
  );
}