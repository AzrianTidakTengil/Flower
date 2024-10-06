import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isDialogSliders: false
}

const DialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    isOpen(state, action) {
      state.isDialogSliders = true;
    },
    isClose(state, action) {
      state.isDialogSliders = false;
    },
  },
});

export const { isOpen, isClose } = DialogSlice.actions;
const DialogReducer = DialogSlice.reducer;
export default DialogReducer;
