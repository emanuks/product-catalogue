'use client';

import { Provider } from "react-redux";

import { StoreProviderProps } from "./StoreProvider.types";
import { store } from "./store";

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
}