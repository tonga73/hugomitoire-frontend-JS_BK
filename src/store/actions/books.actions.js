import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBooks, fetchBook } from "../../api/booksApi";

import { setBook } from "../slices/books.slice";

export const getBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetchBooks();

  return response;
});

export const getBook = createAsyncThunk(
  "books/fetchBook",
  async (id, { dispatch }) => {
    const response = await fetchBook(id);

    dispatch(setBook(response));
  }
);
