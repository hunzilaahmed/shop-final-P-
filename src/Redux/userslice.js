import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser(state, action) {
      const { uid, email } = action.payload;
      state.uid = uid;
      state.email = email;
    },
    clearUser(state) {
      state.uid = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
