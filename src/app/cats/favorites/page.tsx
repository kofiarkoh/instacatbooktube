"use client";
import BackArrow from "@/assets/images/back_arrow.svg";
import CatItem, {CatItemSkeleton} from "@/components/CatItem";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import {useLoadFavourites} from "@/hooks/useLoadFavourites";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import EmptyCatsList from "../../../components/EmptyCatsList";
import {useAppDispatch} from "../../../redux/store";
import {FavouriteCat} from "../../../types/cat";

export default function Page(props: any) {
	const [favorites, isLoading] = useLoadFavourites();

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
									{favorites.map((i: FavouriteCat) => (
										<Grid key={i.id} component="div" xs={12} sm={12} md={4} lg={4}>
											<CatItem triggerOnRemoveAnimation={true} cat={i} />
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
