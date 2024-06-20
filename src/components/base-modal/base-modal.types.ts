import { ReactNode } from "react";

export interface BaseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
  title: ReactNode;
}
