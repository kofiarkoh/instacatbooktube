"use client";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import BackArrow from "@/assets/images/back_arrow.svg";
import FavoriteIcon from "@/assets/images/heart.svg";
import Grid from "@mui/material/Unstable_Grid2";
import CatItem from "@/components/CatItem";
import {useEffect, useState} from "react";
import {FormikHelpers} from "formik";
import {updateToken} from "@/redux/tokenSlice";
import {Cat} from "../../../types/cat";
import {useLazyGetFavouriteCatsQuery} from "../../../redux/rtk/catsApi";

export default function Page(props: any) {
	const [getFavouriteCats, {isLoading, data: favorites}] =
		useLazyGetFavouriteCatsQuery();

	const handleGetFavourites = () => {
		getFavouriteCats({})
			.unwrap()
			.then((response: Cat[]) => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const removeFromFavorites = (item: Cat) => {};

	useEffect(() => {
		handleGetFavourites();
	}, []);
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
					{favorites ? (
						<>
							{favorites.map((i) => (
								<Grid key={i.image} item={true} xs={12} sm={12} md={4} lg={4}>
									<CatItem
										isFavorite={true}
										cat={i.image}
										onRemove={removeFromFavorites}
									/>
								</Grid>
							))}
						</>
					) : (
						<>nno</>
					)}
				</Grid>
			</div>
		</>
	);
}
