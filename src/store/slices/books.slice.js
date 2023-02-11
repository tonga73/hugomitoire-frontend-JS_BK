import { createSlice } from "@reduxjs/toolkit";

import { getBooks } from "../actions/books.actions";

const initialState = {
  books: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
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

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
