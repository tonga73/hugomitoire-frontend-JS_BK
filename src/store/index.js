import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";
import bookReducer from "./slices/book.slice";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
  },
});
