/* eslint-disable @next/next/no-img-element */

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import {useState} from "react";
import {Cat, FavouriteCat} from "../types/cat";
import {useRemoveCatFromFavouriteMutation} from "../redux/rtk/catsApi";

interface Props {
	isFavorite?: boolean;
	cat: Cat | FavouriteCat;
	onRemove?: (i: Cat) => void;
	onMarkAsFavourite?: (i: Cat) => void;
}

export default function CatItem(props: Props) {
	const {isFavorite, onRemove, cat, onMarkAsFavourite} = props;
	const [animate, setAnimate] = useState(false);
	const [removeFromFavourites, {}] = useRemoveCatFromFavouriteMutation();

	/**
	 * if already mark as favorite, remove from favorite, else add to faavourite
	 */
	const onFavourite = () => {
		if (isFavorite) {
			removeFromFavourites(cat.id)
				.unwrap()
				.then((r) => {
					setAnimate(true);
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			// check if cat is of Cat type not FavouriteCat
			if ("url" in cat && onMarkAsFavourite) {
				onMarkAsFavourite(cat);
			}
			//onMarkAsFavourite && onMarkAsFavourite(cat as Cat);
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
