"use client";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import BackArrow from "@/assets/images/back_arrow.svg";
import FavoriteIcon from "@/assets/images/heart.svg";
import Grid from "@mui/material/Unstable_Grid2";
import CatItem from "@/components/CatItem";
import {useState} from "react";

export default function Page(props: any) {
	const [favorites, setFavorites] = useState([1, 2, 3, 4, 5]);

	const removeFromFavorites = (item: number) => {
		setFavorites(favorites.filter((i) => i !== item));
	};
	return (
		<>
			<Navbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="log out">
					<BackArrow />
				</IconButton>
				<NavbarTitle>Favorites</NavbarTitle>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="log out"></IconButton>
			</Navbar>
			<div style={{paddingTop: "60px"}}>
				<Grid container spacing={2}>
					{favorites.map((i) => (
						<Grid key={i} item={true} xs={12} sm={12} md={4} lg={4}>
							<CatItem isFavorite={true} cat={i} onRemove={removeFromFavorites} />
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
}
