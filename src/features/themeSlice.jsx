import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: { bg: "wireframe" },
  },
  reducers: {
    changeTheme: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
