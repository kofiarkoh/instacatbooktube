import {updateFavoriteCats} from "@/redux/catsSlice";
import {useLazyGetFavouriteCatsQuery} from "@/redux/rtk/catsApi";
import {useAppDispatch} from "@/redux/store";
import {FavouriteCat} from "@/types/cat";
import {useEffect} from "react";
import {toast} from "react-toastify";

export const useLoadFavourites = () => {
	const [getFavouriteCats, {data: favorites, isLoading}] =
		useLazyGetFavouriteCatsQuery();
	const dispatch = useAppDispatch();

	const handleGetFavourites = () => {
		getFavouriteCats({})
			.unwrap()
			.then((response: FavouriteCat[]) => {
				let ids: {[key: string]: string | number} = {};
				response.forEach((i) => {
					ids[i.image.id] = i.id;
				});
				dispatch(updateFavoriteCats(ids));
			})
			.catch((error: any) => {
				toast("Failed to load favourites. Please reload the page to try again", {
					type: "error",
				});
			});
	};

	useEffect(() => {
		handleGetFavourites();
	}, []);

	return [favorites, isLoading] as const;
};
