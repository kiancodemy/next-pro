const decimal = (number: number) => Math.round((number * 100) / 100);
import { ProductType } from "@/type";
export const cart = (state: any) => {
  state.itemprice = decimal(
    state.cartItems.reduce(
      (acc: number, item: ProductType) => acc + item.price * item.qty,
      0
    )
  );
  state.shipping = state.itemprice >= 1000000 ? 0 : 10;
  state.tax = decimal(Number(state.itemprice * 0.15));
  state.totalprice =
    Number(state.itemprice) + Number(state.shipping) + Number(state.tax);
  return localStorage.setItem("card", JSON.stringify(state));
};
