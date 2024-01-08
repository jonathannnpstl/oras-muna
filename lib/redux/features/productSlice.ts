import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "@/lib/definition";
import { fetchProducts } from "@/lib/api/data";
import { testFunc } from "@/lib/api/somefile";

export const fetchProductsList = createAsyncThunk(
  "products/fetchProducts",
  async (
    q: {
      query?: string;
      sortKey?: string | undefined;
      reverse?: boolean;
      brand?: string | undefined;
      skip?: number | undefined;
    },
    thunkAPI
  ) => {
    try {
      const response = await fetchProducts(q);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export interface ProductState {
  products: Product[] | undefined;
  filteredProducts: Product[] | undefined;
  numberOfPages: number | undefined;
  loading: boolean;
}

const initialState: ProductState = {
  products: undefined,
  filteredProducts: undefined,
  numberOfPages: 0,
  loading: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (
      state,
      action: PayloadAction<{
        caseMaterial: string[];
        bandColor: string[];
        dialColor: string[];
      }>
    ) => {
      console.log("Current", current(state.products));
      state.filteredProducts = state.products?.filter((product) => {
        action.payload.caseMaterial.includes("rose gold");
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
      state.filteredProducts = [...action.payload.products];
      state.numberOfPages = action.payload.numberOfPages;
      state.loading = false;
    });
    builder.addCase(fetchProductsList.pending, (state) => {
      console.log("Pending");
      state.loading = true;
    });
    builder.addCase(fetchProductsList.rejected, (state) => {
      console.log("Rejected");
      state.loading = false;
    });
  },
});

export const { filterProducts } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
