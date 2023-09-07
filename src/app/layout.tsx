"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {ThemeProvider, createTheme} from "@mui/material/styles";
import "./globals.css";
import "animate.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<ThemeProvider
				theme={createTheme({
					palette: {
						primary: {
							main: "rgba(98, 204, 109, 1)",
						},
					},
				})}>
				<body>{children}</body>
			</ThemeProvider>
		</html>
	);
}
