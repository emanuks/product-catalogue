import { useDispatch } from "react-redux";

import { Minus, Plus, Trash } from "@/utils/svg-icons";
import { CartChangeProps } from "./cart-change.types";
import { changeQty, decrement, increment, removeFromCart } from "@/store/cartSlice";
import { ChangeEvent } from "react";

export const CartChange = ({ product }: CartChangeProps) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product));
  }

  const handleAddQuantity = () => {
    dispatch(increment(product));
  }

  const handleRemoveQuantity = () => {
    dispatch(decrement(product));
  }

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(changeQty({
      ...product,
      quantity: value,
    }));
  }

  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={handleRemoveProduct}
        className="py-1 px-2 bg-red-100 rounded hover:opacity-75 hover:cursor-pointer"
      >
        <Trash className="fill-red-500 w-4" />
      </button>
      <div className="flex flex-row gap-1 py-1 px-3 bg-gray-100 rounded">
        <button
          disabled={product.quantity === 1}
          onClick={handleRemoveQuantity}
          className="disabled:cursor-not-allowed"
        >
          <Minus className="fill-gray-500 w-3" />
        </button>
        <input
          value={product.quantity}
          className="w-10 bg-gray-100 text-gray-500 text-center"
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddQuantity}>
          <Plus className="fill-gray-500 w-3" />
        </button>
      </div>
    </div>
  );
}