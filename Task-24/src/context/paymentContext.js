import { createContext, useContext } from "react";

export const PaymentContext = createContext({
  action: "",
  cartItems: [],
  toPayment: () => {},
  toCart: () => {},
});

export const PaymentProvider = PaymentContext.Provider;

export default function usePayment() {
  return useContext(PaymentContext);
}
