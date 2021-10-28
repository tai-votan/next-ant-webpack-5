import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";
import userAPI from "@/services/user";
import { CurrentUser, UserLogin } from "@/models/user";

export const userLogin = createAsyncThunk<CurrentUser, UserLogin>(
  "user/userLogin",
  async (params) => <CurrentUser>(<any>await userAPI.userLogin(params))
);

export const getCurrentUser = createAsyncThunk<CurrentUser>(
  "user/getCurrentUser",
  async () => <CurrentUser>(<any>await userAPI.currentUser())
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    currentUser: <CurrentUser>{},
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled.type]: (
      state,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // @TODO need implement api
      { payload, meta }: PayloadAction<{ token: string }>
    ) => {
      state.loading = false;
      localStorage.setItem("auth", JSON.stringify(meta.arg));
      localStorage.setItem("token", payload.token);
      if (payload.token) {
        Router.push("/jobs");
      }
    },
    [getCurrentUser.pending.type]: (state) => {
      state.loading = true;
    },
    [getCurrentUser.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CurrentUser>
    ) => {
      state.currentUser = payload;
      state.loading = false;
    },
    [getCurrentUser.rejected.type]: (state) => {
      state.loading = false;
      Router.push("/");
    },
  },
});

export default userSlice.reducer;
