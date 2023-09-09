import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../types";

export const baseApi: any = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
		prepareHeaders: (headers, {getState}: {getState: () => RootState}) => {
			headers.set("x-api-key", `${getState().tokenState.token}`);
		},
	}),

	endpoints: () => ({}),

	tagTypes: ["cats", "favouriteCats"],
});
