import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  volume: 0.3,
  isChanged: false,
  momenChanged: 0.3,
  isDefault: true,
};

const SettingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    handleVolume(state, action) {
      state.volume = action?.payload;
    },

    toggleChanged(state, action) {
      state.isChanged = action?.payload;
    },
    handleValueChanged(state, action) {
      state.momenChanged = action?.payload;
    },
    toggleDefault(state, action) {
      state.isDefault = action?.payload;
    },
  },
});

export const {
  handleVolume,
  toggleChanged,
  handleValueChanged,
  toggleDefault,
} = SettingSlice.actions;
const SettingReducer = SettingSlice.reducer;
export default SettingReducer;
