import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUserEnums } from "../../api/configApi";

export const getConfig = createAsyncThunk("book/fetchConfig", async (id) => {
  const response = await fetchUserEnums(id);

  return response;
});
