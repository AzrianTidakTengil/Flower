import { createSlice } from "@reduxjs/toolkit";
const story = require("../content/story.json");

export const initialState = {
  page: 0,
  frame: 1,
  isStart: false,
  status: null,
  ready: false,
  frameData: story,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action) {
      if (state.page !== action?.payload) {
        state.status = "waiting";
      } else {
        state.page = action?.payload;
      }
    },
    isReady(state, action) {
      console.log('hadir')
      state.ready = true;
    },
    nextFrame(state, action) {
      state.page = action?.payload;
    },
    toggleStart(state, action) {
      state.isStart = true;
    },
    clearStage(state, action) {
      state = {
        page: 1,
        frame: 1,
        isStart: false,
        status: null,
        ready: false,
      };
    },
  },
});

export const { setPage, nextFrame, toggleStart, clearStage, isReady } =
  paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;
export default paginationReducer;
