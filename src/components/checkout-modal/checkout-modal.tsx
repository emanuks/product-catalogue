import Image from "next/image";
import { useDispatch } from "react-redux";

import { Check } from "@/utils/svg-icons";
import { BaseModal } from "../base-modal";

import checkoutImg from "../../../public/assets/images/checkout.svg";
import { clearCart } from "@/store/cartSlice";

export const CheckoutModal = ({ open, onRequestClose }: any) => {
  const dispatch = useDispatch();
  
  const handleConfirm = () => {
    dispatch(clearCart());
    onRequestClose();
  }

  return (
    <BaseModal 
      isOpen={open} 
      onRequestClose={onRequestClose} 
      title={
        <div className="flex flex-row gap-3 text-gray-400 text-xl">
          <Check className="w-4 fill-orange-500"/>
          Sucesso!
        </div>
      }
    >
      <div className="flex flex-col justify-evenly h-full items-center">
        <Image src={checkoutImg} width={160} height={160} alt="Checkout Image" />

        <h2 className="text-2xl">Seu pedido foi concluido!</h2>
        <p className="text-gray-400">Retornaremos com atualizacoes em seu e-mail.</p>

        <button 
          className="bg-orange-500 p-3 rounded text-white text-center w-full hover:opacity-75"
          onClick={handleConfirm}
        >
          Entendi
        </button>
      </div>
    </BaseModal>
  );
}