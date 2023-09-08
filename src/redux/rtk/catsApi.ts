import {Cat} from "../../types/cat";
import {baseApi} from "./baseApi";

export const catsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getCats: build.query<Cat[], any>({
			query: () => ({
				url: "images/search",
				params: {
					order: "asc",
					page: "1",
					limit: "10",
				},
			}),
			providesTags: ["cats"],
		}),
		getFavouriteCats: build.query<Cat[], any>({
			query: () => ({
				url: "favourites",
			}),
			providesTags: ["favouriteCats"],
		}),
		
	}),
	overrideExisting:true
});

export const {useLazyGetCatsQuery, useLazyGetFavouriteCatsQuery} = catsApi;
