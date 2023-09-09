"use client";
import BackArrow from "@/assets/images/back_arrow.svg";
import CatItem, {CatItemSkeleton} from "@/components/CatItem";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect} from "react";
import {useLazyGetFavouriteCatsQuery} from "../../../redux/rtk/catsApi";
import {Cat} from "../../../types/cat";
import EmptyCatsList from "../../../components/EmptyCatsList";
import Link from "next/link";

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
				<Link href="/cats">
					<IconButton size="large" edge="start" color="inherit" aria-label="log out">
						<BackArrow />
					</IconButton>
				</Link>
				<NavbarTitle>Favorites</NavbarTitle>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="log out"></IconButton>
			</Navbar>
			<div style={{paddingTop: "60px"}}>
				<Grid container spacing={2}>
					{isLoading ? (
						<>
							<Grid component="div" xs={12} sm={12} md={4} lg={4}>
								<CatItemSkeleton />
							</Grid>
							<Grid component="div" xs={12} sm={12} md={4} lg={4}>
								<CatItemSkeleton />
							</Grid>
							<Grid component="div" xs={12} sm={12} md={4} lg={4}>
								<CatItemSkeleton />
							</Grid>
						</>
					) : (
						<>
							{favorites && favorites.length !== 0 ? (
								<>
									{favorites.map((i) => (
										<Grid key={i.id} component="div" xs={12} sm={12} md={4} lg={4}>
											<CatItem isFavorite={true} cat={i} onRemove={removeFromFavorites} />
										</Grid>
									))}
								</>
							) : (
								<EmptyCatsList>
									<Typography variant="h4" color="initial">
										You have not saved any favorite cat in your account
									</Typography>
								</EmptyCatsList>
							)}
						</>
					)}
				</Grid>
			</div>
		</>
	);
}
