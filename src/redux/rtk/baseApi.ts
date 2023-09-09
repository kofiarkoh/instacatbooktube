import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
		prepareHeaders: (headers, {getState}) => {
			headers.set("x-api-key", `${getState().tokenState.token}`);
		},
	}),

	endpoints: () => ({}),

	tagTypes: ["cats", "favouriteCats"],
});
