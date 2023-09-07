/* eslint-disable @next/next/no-img-element */

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import {useState} from "react";
import {Cat} from "../types/cat";

interface Props {
	isFavorite?: boolean;
	cat: Cat;
	onRemove: (i: Cat) => void;
}
export default function CatItem(props: Props) {
	const {isFavorite, onRemove, cat} = props;
	const [animate, setAnimate] = useState(false);

	const handleRemoval = () => {
		setTimeout(() => {
			setAnimate(true);
		}, 3000);
		setTimeout(() => {
			onRemove(cat);
		}, 4000);
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
					src={cat.url}
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
						onClick={handleRemoval}
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
