import { createSlice } from "@reduxjs/toolkit";

import { getBook } from "../actions/book.actions";

const initialState = {
  book: {},
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBook.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getBook.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.book = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getBook.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setBook } = bookSlice.actions;

export const selectBook = (state) => state.book.book;

export default bookSlice.reducer;
