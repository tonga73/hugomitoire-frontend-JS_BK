import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";
import bookReducer from "./slices/book.slice";
import configReducer from "./slices/config.slice";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
  },
});
