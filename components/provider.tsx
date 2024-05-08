import { Provider } from "react-redux";
import { store } from "@/lib/store";
import React from "react";
function provide({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

export default provide;
