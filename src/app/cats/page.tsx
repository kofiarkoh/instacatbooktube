"use client";
import FavoriteIcon from "@/assets/images/heart.svg";
import LogoutIcon from "@/assets/images/logout.svg";
import CatItem, {CatItemSkeleton} from "@/components/CatItem";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import {useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import {useLogout} from "../../hooks/auth/useLogout";
import {useLoadFavourites} from "../../hooks/useLoadFavourites";
import {useScrollObserver} from "../../hooks/useScrollObserver";
import {useLazyGetCatsQuery} from "../../redux/rtk/catsApi";
import {Cat} from "../../types/cat";

export default function Page(props: any) {
	const [getCats, {data: cats, isLoading, isFetching}] = useLazyGetCatsQuery();

	const [dialogVisible, setDialogVisible] = useState(false);
	const [page, decreasePage, observerTarget] = useScrollObserver();
	const router = useRouter();
	const [logout] = useLogout();
	const [favorites, isLoadingFavorites] = useLoadFavourites();
	//const observerTarget = useRef<HTMLDivElement>(null);

	useEffect(() => {
		getCats(page)
			.unwrap()
			.catch((e: any) => {
				// revert page number should request fail
				decreasePage();
			});
	}, [page, favorites]);

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
					<>
						<>
							{cats &&
								cats.map((i: Cat) => (
									<Grid component="div" key={i.id} xs={12} sm={12} md={4} lg={4}>
										<CatItem cat={i} triggerOnRemoveAnimation={false} />
									</Grid>
								))}
							{isLoading ||
								(isFetching && (
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
								))}
							<div ref={observerTarget}></div>
						</>
					</>
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
