"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/redux/store";
import { getFiltersList } from "@/lib/redux/features/filterSlice";

export default function StoreProvider({
  data,
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(getFiltersList());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
