import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "@/lib/definition";
import { fetchProducts, getFilters } from "@/lib/api/data";

export const getFiltersList = createAsyncThunk(
  "filter/getFilters",
  async (q, thunkAPI) => {
    try {
      const response = await getFilters();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export interface FilterState {
  filters: { filterType: string; filterItems: [] }[] | undefined;
  loading: boolean;
}

const initialState: FilterState = {
  filters: undefined,
  loading: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getFiltersList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.filters = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getFiltersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFiltersList.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.product;

export default filterSlice.reducer;
