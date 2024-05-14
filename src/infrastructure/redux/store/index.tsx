import {  configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../slices/theme";
import { uiSlice } from "../slices/ui";
import { librarySlice } from "../slices/library";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    ui: uiSlice.reducer,
    library: librarySlice.reducer,
  }
});

export default store;

