

import { BaseModalProps } from "./base-modal.types";
import { Close } from "@/utils/svg-icons";

import "./base-modal.styles.css";

export const BaseModal = ({
  children,
  isOpen,
  onRequestClose,
  title,
}: BaseModalProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 bg-gray-600/50 h-dvh w-dvw ${
        !isOpen && "hidden"
      } cursor:default flex`}
      onClick={onRequestClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-11/12 w-11/12 lg:w-1/4 lg:h-1/2 lg:my-auto flex flex-col justify-between mx-auto my-5 bg-white rounded border border-gray-200 gap-5"
      >
        <div className="flex flex-row justify-between items-center border-b-2 border-gray-50 p-5">
          {title}
          <div
            className="w-5 rounded hover:opacity-75 fill-black cursor-pointer p-1"
            onClick={onRequestClose}
          >
            <Close className="w-2.5 m-auto" />
          </div>
        </div>

        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
};
