import { createSlice } from "@reduxjs/toolkit";

import { getUser } from "../actions/user.actions";

const initialState = {
  user: null,
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentRequestId: (state, action) => {
      state.loading = "pending";
      state.currentRequestId = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.user = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getUser.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setCurrentRequestId, setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
