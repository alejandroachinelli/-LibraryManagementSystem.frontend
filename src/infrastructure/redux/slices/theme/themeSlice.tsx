import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../../../domain/models/Theme';

const initialState: Theme = {
    lang: "en",
    dir: "ltr",
    dataThemeMode: "light",
    dataMenuStyles: "dark",
    dataNavLayout: "vertical",
    dataHeaderStyles: "light",
    dataVerticalStyle: "overlay",
    StylebodyBg:"107 64 64",
    StyleDarkBg:"93 50 50",
    toggled:"",
    dataNavStyle:"",
    horStyle:"",
    dataPageStyle:"regular",
    dataWidth:"fullwidth",
    dataMenuPosition:"fixed",
    dataHeaderPosition:"fixed",
    loader:"disable",
    iconOverlay:"",
    colorPrimaryRgb:"",
    bodyBg1:"",
    bodyBg2:"",
    darkBg:"",
    inputBorder:"",
    bgImg:"",
    iconText:"",
    body:{
        class:""
    }
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      changeThemeMode(state, action: PayloadAction<string>) {
        state.dataThemeMode = action.payload;
      },
    },
});
  
export const { changeThemeMode } = themeSlice.actions;