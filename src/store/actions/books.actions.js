import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBooks, fetchBook } from "../../api/booksApi";

export const getBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetchBooks();

  return response;
});
