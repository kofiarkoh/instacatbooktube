import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {PropsWithChildren} from "react";

export default function Navbar(props: PropsWithChildren) {
	return (
		<AppBar
			position="fixed"
			sx={{
				position: "fixed",
				background: "rgba(255, 255, 255, 0.2)",
				boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
				backdropFilter: "blur(5px)",
				WebkitBackdropFilter: "blur(5px)",
			}}>
			<Toolbar sx={{}}>{props.children}</Toolbar>
		</AppBar>
	);
}

export function NavbarTitle(props: PropsWithChildren) {
	return (
		<Typography
			variant="h6"
			component="div"
			sx={{flexGrow: 1, textAlign: "center", color: "black", fontWeight: "400"}}>
			{props.children ? props.children : "instacatbooktube"}
		</Typography>
	);
}
