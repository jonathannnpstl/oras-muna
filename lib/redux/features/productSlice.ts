import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "@/lib/definition";
import { fetchProducts } from "@/lib/api/data";

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
  numberOfPages: number | undefined;
  count: number;
  loading: boolean;
}

const initialState: ProductState = {
  products: undefined,
  numberOfPages: 0,
  count: 0,
  loading: true,
};

export const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
      state.numberOfPages = action.payload.numberOfPages;
      state.loading = false;
      state.count = action.payload.count;
      console.log(current(state));
    });
    builder.addCase(fetchProductsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsList.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
