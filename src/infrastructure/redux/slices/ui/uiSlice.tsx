import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ui } from '../../../../domain/models/Ui';

const initialState: Ui = {
    loading: false,
    error: false,
    messageError: '',
    showModal: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setErrorLogin(state, action: PayloadAction<boolean>){
            state.error = action.payload;
        },
        setMessageErrorLogin(state, action: PayloadAction<string>){
            state.messageError = action.payload;
        },
        setShowModal(state, action: PayloadAction<boolean>){
            state.showModal = action.payload;
        }
    },
});
  
export const { 
    setLoading,
    setErrorLogin,
    setMessageErrorLogin,
    setShowModal
} = uiSlice.actions;