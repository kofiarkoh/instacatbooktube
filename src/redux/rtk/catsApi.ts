import {Cat} from "../../types/cat";
import {baseApi} from "./baseApi";

export const catsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getCats: build.query<Cat[], any>({
			query: (page) => ({
				url: "images/search",
				params: {
					order: "asc",
					page: page,
					limit: "10",
				},
			}),
			serializeQueryArgs: ({endpointName}) => {
				return endpointName;
			},
			// Always merge incoming data to the cache entry
			merge: (currentCache, newItems) => {
				currentCache.push(...newItems);
			},
			// Refetch when the page arg changes
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
			providesTags: ["cats"],
		}),
		getFavouriteCats: build.query<Cat[], any>({
			query: () => ({
				url: "favourites",
			}),
			providesTags: ["favouriteCats"],
		}),
		markCatAsFavourite: build.mutation({
			query: (payload) => ({
				url: "favourites",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["favouriteCats"],
		}),
		removeCatFromFavourite: build.mutation({
			query: (id) => ({
				url: `favourites/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["favouriteCats"],
		}),
	}),
	overrideExisting: true,
});

export const {
	useLazyGetCatsQuery,
	useLazyGetFavouriteCatsQuery,
	useMarkCatAsFavouriteMutation,
	useRemoveCatFromFavouriteMutation,
} = catsApi;
