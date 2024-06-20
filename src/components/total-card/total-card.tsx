'use client';

import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { CheckoutModal } from "../checkout-modal";

export const TotalCard = () => {
  const [open, setOpen] = useState(false);

  const total = useSelector((state: RootState) => state.cart.total);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between pb-5 border-b border-gray-100">
        <span className="text-gray-500">
          Sub total:
        </span>
        R$ {total.toFixed(2)}
      </div>

      <div className="flex flex-row justify-between py-5 border-b border-gray-100">
        <span className="text-gray-500">
          Frete:
        </span>
        <span className="text-green-600">
          Gratis
        </span>
      </div>

      <div className="flex flex-row justify-between py-5">
        <span className="text-gray-500">
          Total:
        </span>

        R$ {total.toFixed(2)}
      </div>

      <button
        disabled={total === 0}
        className="mt-5 bg-orange-500 p-3 rounded text-white hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-75"
        onClick={() => setOpen(true)}
      >
        Finalizar compra
      </button>

      <CheckoutModal open={open} onRequestClose={handleClose} />
    </div>
  );
}