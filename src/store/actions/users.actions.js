import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUsers, fetchUserEnums } from "../../api/usersApi";

import { setEnums } from "../slices/users.slice";

export const getEnumUsers = createAsyncThunk(
  "users/fetchUserEnums",
  async ({ dispatch }) => {
    const response = await fetchUserEnums();

    console.log(response);
    dispatch(setEnums(response));
  }
);

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchUsers();

  return response;
});
