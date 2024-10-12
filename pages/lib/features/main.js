import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  page: 1,
  frame: 1,
  isStart: false,
  status: null,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action) {
      if (state.page !== action?.payload) {
        state.status = 'waiting'
      } else {
        state.page = action?.payload;
      }
    },
    setFrame(state, action) {
      state.page = action?.payload;
    },
    toggleStart(state, action){
      state.isStart = true
    },
  },
});


export const { setPage, setFrame, toggleStart, progresStatus } = paginationSlice.actions

const paginationReducer = paginationSlice.reducer;
export default paginationReducer