import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBook } from "../../api/booksApi";

import { setBook } from "../slices/book.slice";

export const getBook = createAsyncThunk("book/fetchBook", async (id) => {
  const response = await fetchBook(id);

  return response;
});
