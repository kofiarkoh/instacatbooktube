/* eslint-disable @next/next/no-img-element */

import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Box} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
	isFavorite?: boolean;
}
export default function CatItem(props: Props) {
	const {isFavorite} = props;
	return (
		<Box
			sx={{
				justifyContent: "center",
				alignItems: "center",
				borderWidth: "5px",
				borderColor: "red",
				width: "100%",

				position: "relative",
			}}>
			<img
				src="https://29.media.tumblr.com/tumblr_krvvj0ZbSA1qa9hjso1_1280.jpg"
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
					sx={{padding: 4}}
					aria-label="favorite">
					{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
				</IconButton>
			</Box>
		</Box>
	);
}
