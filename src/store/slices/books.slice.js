import { createSlice } from "@reduxjs/toolkit";

import { getBooks } from "../actions/books.actions";

const initialState = {
  books: [],
  book: {},
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.books = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setBook } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;

export const selectBook = (state) => state.books.book;

export default booksSlice.reducer;
