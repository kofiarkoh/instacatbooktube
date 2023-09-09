import {
	PreloadedState,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {baseApi} from "./rtk/baseApi";
import tokenSlice from "./tokenSlice";
import catsSlice from "./catsSlice";

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	tokenState: tokenSlice,
	catsState: catsSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(baseApi.middleware),

		preloadedState,
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
type DispatchFunc = () => AppDispatch;

export const reduxStore = setupStore();
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
