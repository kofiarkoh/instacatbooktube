import {createSlice} from "@reduxjs/toolkit";

const initialState: {
	[key: string]: string | null;
} = {};
export const catsSlice = createSlice({
	name: "catsSlice",
	initialState: {
		favouriteCatIds: initialState,
	},
	reducers: {
		addToFavoruiteCatIds: (state, {payload}: {payload: any}) => {
			state.favouriteCatIds[payload.catId] = payload.favouriteId;
			localStorage.setItem("favorite_cats", JSON.stringify(state.favouriteCatIds));
		},
		removeFavouriteCatById: (state, {payload}) => {
			state.favouriteCatIds[payload.catId] = null;
			localStorage.setItem("favorite_cats", JSON.stringify(state.favouriteCatIds));
		},
		updateFavoriteCats: (state, {payload}) => {
			state.favouriteCatIds = payload;
			//localStorage.setItem("favorite_cats", JSON.stringify(state.favouriteCatIds));
		},
	},
});

export const {
	addToFavoruiteCatIds,
	removeFavouriteCatById,
	updateFavoriteCats,
} = catsSlice.actions;
export default catsSlice.reducer;
