/* eslint-disable @next/next/no-img-element */

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import {useState} from "react";
import {addToFavoruiteCatIds} from "../redux/catsSlice";
import {
	useMarkCatAsFavouriteMutation,
	useRemoveCatFromFavouriteMutation,
} from "../redux/rtk/catsApi";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {Cat, FavouriteCat} from "../types/cat";
import {toast} from "react-toastify";

interface Props {
	triggerOnRemoveAnimation?: boolean;
	cat: Cat | FavouriteCat;
}

export default function CatItem(props: Props) {
	const {triggerOnRemoveAnimation, cat, onMarkAsFavourite} = props;
	const [animate, setAnimate] = useState(false);
	const [removeFromFavourites, {}] = useRemoveCatFromFavouriteMutation();
	const [markCatAsFavorite, {isLoading: isSettingFavourite}] =
		useMarkCatAsFavouriteMutation();
	const {favouriteCatIds} = useAppSelector((state) => state.catsState);
	const dispatch = useAppDispatch();

	let catId = "user_id" in cat ? cat.image.id : cat.id;
	let isFavorite = favouriteCatIds[catId];

	/**
	 * if already mark as favorite, remove from favorite, else add to faavourite
	 */
	const onFavourite = () => {
		if (isFavorite) {
			removeFromFavourites(favouriteCatIds[catId])
				.unwrap()
				.then((r) => {
					dispatch(
						addToFavoruiteCatIds({
							catId: catId,
						})
					);
					toast("Photo removed from favourites.", {
						type: "success",
					});
					if (triggerOnRemoveAnimation) {
						setAnimate(true);
					}
				})
				.catch((e) => {
					console.log(e);
					toast("Failed to remove photo from favourites. Please try again", {
						type: "error",
					});
				});
		} else {
			markCatAsFavorite({
				image_id: cat.id,
			})
				.then((r) => {
					dispatch(
						addToFavoruiteCatIds({
							catId: catId,
							favouriteId: r.data.id,
						})
					);
					toast("Photo added as favourite.", {
						type: "success",
					});
				})
				.catch((e) => {
					toast("Failed to add photo to favourites. Please try again", {
						type: "error",
					});
				});
		}
	};

	return (
		<div className={animate ? "animate__animated animate__fadeOutLeft" : ""}>
			<Box
				sx={{
					justifyContent: "center",
					alignItems: "center",
					borderWidth: "5px",
					borderColor: "red",
					width: "100%",
					height: "350px",
					position: "relative",
				}}>
				<img
					src={"user_id" in cat ? cat.image.url : cat.url}
					style={{
						objectFit: "cover",
						width: "100%",
						height: "100%",
					}}
					alt=""
				/>
				<Box
					sx={{
						position: "absolute",

						width: "100%",
						height: "100%",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "flex-end",
					}}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						onClick={onFavourite}
						sx={{padding: 4}}
						aria-label="favorite">
						{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
				</Box>
			</Box>
		</div>
	);
}
export function CatItemSkeleton() {
	return (
		<>
			<Skeleton animation="wave" width="100%" height="350px" />
		</>
	);
}
