import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {PropsWithChildren} from "react";

export default function Navbar(props: PropsWithChildren) {
	return (
		<AppBar
			position="fixed"
			className="navabar-glass"
			sx={{
				position: "fixed",
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
