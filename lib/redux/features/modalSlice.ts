import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const { openModal, closeModal } = modalSlice.actions;

export const selectFilter = (state: RootState) => state.modal;

export default modalSlice.reducer;
