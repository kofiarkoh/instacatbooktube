"use client";
import FavoriteIcon from "@/assets/images/heart.svg";
import LogoutIcon from "@/assets/images/logout.svg";
import CatItem, {CatItemSkeleton} from "@/components/CatItem";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect, useState} from "react";
import {
	useLazyGetCatsQuery,
	useMarkCatAsFavouriteMutation,
} from "../../redux/rtk/catsApi";
import {useRouter} from "next/navigation";
import {Cat} from "../../types/cat";
import Box from "@mui/material/Box";
import EmptyCatsList from "../../components/EmptyCatsList";
import {useLogout} from "../../hooks/auth/useLogout";
import ConfirmDialog from "../../components/ConfirmDialog";

export default function Page(props: any) {
	const [getCats, {data: cats, isLoading}] = useLazyGetCatsQuery();
	const [markCatAsFavorite, {isLoading: isSettingFavourite}] =
		useMarkCatAsFavouriteMutation();
	const [dialogVisible, setDialogVisible] = useState(false);
	const router = useRouter();
	const [logout] = useLogout();

	const addToFavourite = (cat: Cat) => {
		markCatAsFavorite({
			image_id: cat.id,
		})
			.then((r) => {
				console.log("cat set as fav");
			})
			.catch((e) => {
				console.log("failed to set cat as favorite");
			});
	};

	const goToFavorites = () => {
		router.push("/cats/favorites");
	};

	const showDialog = () => {
		setDialogVisible(true);
	};

	const hideDialog = () => {
		setDialogVisible(false);
	};

	const handleLogout = () => {
		hideDialog();
		logout();
	};

	useEffect(() => {
		getCats({});
	}, []);
	return (
		<>
			<Navbar>
				<IconButton
					onClick={showDialog}
					size="large"
					edge="start"
					color="inherit"
					aria-label="log out">
					<LogoutIcon />
				</IconButton>
				<NavbarTitle />
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="favorites"
					onClick={goToFavorites}>
					<FavoriteIcon />
				</IconButton>
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
							{cats ? (
								<>
									{cats.map((i) => (
										<Grid component="div" key={i.id} xs={12} sm={12} md={4} lg={4}>
											<CatItem cat={i} onMarkAsFavourite={addToFavourite} />
										</Grid>
									))}
								</>
							) : (
								<EmptyCatsList>
									<Typography variant="h4" color="initial">
										No Cats Found
									</Typography>
								</EmptyCatsList>
							)}
						</>
					)}
				</Grid>
			</div>
			<ConfirmDialog
				onAccept={handleLogout}
				onCancel={hideDialog}
				title="Are you sure you want to logout"
				visible={dialogVisible}
			/>
		</>
	);
}
