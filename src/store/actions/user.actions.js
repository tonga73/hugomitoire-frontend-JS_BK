import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUser, fetchCreateUser } from "../../api/usersApi";

import { setCurrentRequestId, setUser } from "../slices/user.slice";

// OBTIENE TODOS LOS USUARIOS
export const getUser = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await fetchUser(id);

  return response;
});

// CREA UN USUARIO (requiere: email)
export const createUser = createAsyncThunk(
  "user/fetchCreateUser",
  async (user, { dispatch, requestId, getState }) => {
    dispatch(setCurrentRequestId(requestId));
    const response = await fetchCreateUser(user);

    if (getState().user.currentRequestId === requestId) {
      dispatch(setUser(response));
    }
  }
);
