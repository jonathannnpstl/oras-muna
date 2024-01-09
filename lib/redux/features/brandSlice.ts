import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "@/lib/definition";
import { fetchProducts, getBrands, getFilters } from "@/lib/api/data";

export const getBrandsList = createAsyncThunk(
  "brand/getBrands",
  async (q, thunkAPI) => {
    try {
      const response = await getBrands();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export interface BrandState {
  brands: string[];
  loading: boolean;
}

const initialState: BrandState = {
  brands: [],
  loading: true,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBrandsList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.brands = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getBrandsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBrandsList.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectBrand = (state: RootState) => state.product;

export default brandSlice.reducer;
