import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import filterSlice from "./features/filterSlice";
import brandSlice from "./features/brandSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { product: productSlice, filter: filterSlice, brand: brandSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
