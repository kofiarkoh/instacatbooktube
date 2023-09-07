"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function Page() {
	return (
		<div
			style={{
				backgroundColor: "rgb(243, 245, 249)",
				height: "97vh",
				width: "100%",
				padding: "0px",
				margin: "0px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Box
				sx={{
					width: ["100%", "100%", "450px"],

					padding: 2,
				}}>
				<div>
					<TextField id="" label="" sx={{width: "100%"}} />
				</div>
				<div>
					<Button variant="contained" sx={{width: "100%", mt: 4}}>
						Sign In
					</Button>
				</div>
			</Box>
		</div>
	);
}
