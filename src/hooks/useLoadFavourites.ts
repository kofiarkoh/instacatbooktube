import {useEffect} from "react";
import {FavouriteCat} from "@/types/cat";
import {updateFavoriteCats} from "@/redux/catsSlice";
import {useLazyGetFavouriteCatsQuery} from "@/redux/rtk/catsApi";
import {useAppDispatch} from "@/redux/store";

export const useLoadFavourites = () => {
	const [getFavouriteCats, {data: favorites, isLoading}] =
		useLazyGetFavouriteCatsQuery();
	const dispatch = useAppDispatch();

	const handleGetFavourites = () => {
		getFavouriteCats({})
			.unwrap()
			.then((response: FavouriteCat[]) => {
				let ids: {[key: number]: string} = {};
				response.forEach((i) => {
					ids[i.image.id] = i.id;
				});
				dispatch(updateFavoriteCats(ids));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		handleGetFavourites();
	}, []);

	return [favorites, isLoading] as const;
};
