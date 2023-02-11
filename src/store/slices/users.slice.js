import { createSlice } from "@reduxjs/toolkit";

import { getUsers } from "../actions/users.actions";

const initialState = {
  users: null,
  enums: {
    roles: null,
  },
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setEnums: (state, action) => {
      state.enums = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.users = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === "pending" && state.currentRequestId === requestId) {
        state.loading = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setUsers, setEnums } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export const selectUsersEnums = (state) => state.users.enums;

export default usersSlice.reducer;
