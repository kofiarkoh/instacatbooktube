import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {PropsWithChildren} from "react";

export default function EmptyCatsList(props: PropsWithChildren) {
	return (
		<Grid
			xs={12}
			sm={12}
			md={12}
			lg={12}
			xl={12}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "400px",
			}}
			component="div">
			<Box sx={{textAlign: "center"}}>{props.children}</Box>
		</Grid>
	);
}
