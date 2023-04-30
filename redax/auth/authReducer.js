import { createSlice } from "@reduxjs/toolkit";

export const auhtSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    nickname: null,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
    }),
  },
});


