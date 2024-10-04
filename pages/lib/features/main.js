import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  page: 1,
  frame: 1
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState
  ,
  reducers: {
    setPage(state, action) {
      state.page = action?.payload;
    },
    setFrame(state, action) {
      state.handleFrame = actioin?.payload?.handleFrame;
    }
  },
});


export const { setPage, setFrame } = paginationSlice.actions

const paginationReducer = paginationSlice.reducer;
export default paginationReducer