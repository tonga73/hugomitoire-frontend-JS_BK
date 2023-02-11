import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";
import bookReducer from "./slices/book.slice";
import configReducer from "./slices/config.slice";
import usersReducer from "./slices/users.slice";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    config: configReducer,
    users: usersReducer,
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
  },
});
