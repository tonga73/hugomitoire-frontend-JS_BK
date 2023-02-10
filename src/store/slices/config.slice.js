import { createSlice } from "@reduxjs/toolkit";

import { getConfig } from "../actions/config.actions";

const initialState = {
  config: {
    pageTitle: "Hugo Mitoire | Sitio Oficial",
  },
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConfig.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getConfig.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.config = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getConfig.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setConfig } = configSlice.actions;

export const selectConfig = (state) => state.config.config;

export default configSlice.reducer;
