import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import filterSlice from "./features/filterSlice";
import modalSlice from "./features/modalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { product: productSlice, filter: filterSlice, modal: modalSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
