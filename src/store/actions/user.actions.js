import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUser } from "../../api/usersApi";

import { setUser } from "../slices/user.slice";

export const getUser = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await fetchUser(id);

  return response;
});
