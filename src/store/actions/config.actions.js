import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchConfig } from "../../api/configApi";

export const getConfig = createAsyncThunk("book/fetchConfig", async (id) => {
  const response = await fetchConfig(id);

  return response;
});
