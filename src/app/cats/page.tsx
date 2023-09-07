"use client";
import FavoriteIcon from "@/assets/images/heart.svg";
import LogoutIcon from "@/assets/images/logout.svg";
import CatItem from "@/components/CatItem";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect} from "react";
import {useLazyGetCatsQuery} from "../../redux/rtk/catsApi";

export default function Page(props: any) {
	const [getCats, {data: cats, isLoading}] = useLazyGetCatsQuery();

	useEffect(() => {
		getCats({});
	}, []);
	return (
		<>
			<Navbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="log out">
					<LogoutIcon />
				</IconButton>
				<NavbarTitle />
				<IconButton size="large" edge="start" color="inherit" aria-label="log out">
					<FavoriteIcon />
				</IconButton>
			</Navbar>
			<div style={{paddingTop: "60px"}}>
				<Grid container spacing={2}>
					{cats ? (
						<>
							{cats.map((i) => (
								<Grid key={i.id} item xs={12} sm={12} md={4} lg={4}>
									<CatItem cat={i} />
								</Grid>
							))}
						</>
					) : (
						<Typography variant="body1" color="initial">
							no cats found
						</Typography>
					)}
				</Grid>
			</div>
		</>
	);
}
