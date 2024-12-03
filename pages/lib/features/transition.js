import { transition } from "@/pages/component/transition/index.page";
import { duration } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  id: null,
  name: null,
  duration: null,
  goTo: null,
};

const LayerSlice = createSlice({
  name: "layer",
  initialState,
  reducers: {
    layer(state, action) {
      const {name, goTo} = action?.payload;
      switch (name) {
        case "loading":
            return state = {
                    id: 1,
                    name: 'loading',
                    duration: 10000,
                    goTo:goTo ? goTo : null,
            }
        case "fade":
            return state = {
                id: 2,
                name: 'fade',
                duration: 5000,
                goTo:goTo ? goTo : null,
        }
      }
    },
    clearLayer(state, action) {
        return state = {
            id: null,
            name: null,
            duration: null,
            goTo: null
    }
    }
  },
});

export const { layer, clearLayer } = LayerSlice.actions;
const LayerReducer = LayerSlice.reducer;
export default LayerReducer;
