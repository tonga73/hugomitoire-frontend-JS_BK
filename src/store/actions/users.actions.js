import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUsers, fetchUserEnums } from "../../api/usersApi";

import { setEnums } from "../slices/users.slice";

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchUsers();

  return response;
});
