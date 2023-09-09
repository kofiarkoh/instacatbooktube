import {createSlice} from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
	name: "tokenSlice",
	initialState: {
		token: "",
		isLoggedIn: false,
	},
	reducers: {
		updateToken: (state, {payload}) => {
			state.token = payload;
		},
		updateLogInState: (state, {payload}) => {
			state.isLoggedIn = payload;
		},
	},
});

export const {updateLogInState, updateToken} = tokenSlice.actions;
export default tokenSlice.reducer;
