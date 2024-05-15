import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Library } from '../../../../domain/models/Library';
import { Book } from '../../../../domain/models/Book';
import { LoanBook } from '../../../../domain/models/LoanBook';

const initialState: Library = {
    books: [],
    loanBooks: [],
    currentPage: 1,
    pageSize: 10,
    totalPages: 1
};

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        setBooks(state, action: PayloadAction<Book[]>) {
            state.books = action.payload;
        },
        setLoanBooks(state, action: PayloadAction<LoanBook[]>) {
            state.loanBooks = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setPageSize(state, action: PayloadAction<number>) {
            state.pageSize = action.payload;
        },
        setTotalPages(state, action: PayloadAction<number>) {
            state.totalPages = action.payload;
        },
    },
});
  
export const { setBooks, setLoanBooks } = librarySlice.actions;