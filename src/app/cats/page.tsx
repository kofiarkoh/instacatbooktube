"use client";
import Navbar, {NavbarTitle} from "@/components/Navbar";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@/assets/images/logout.svg";
import FavoriteIcon from "@/assets/images/heart.svg";
import Grid from "@mui/material/Unstable_Grid2";
import CatItem from "@/components/CatItem";

export default function Page(props: any) {
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
					{[1, 2, 3, 4, 5].map((i) => (
						<Grid key={i} item={true} xs={12} sm={12} md={4} lg={4}>
							<CatItem />
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
}
