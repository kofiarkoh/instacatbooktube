"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {Provider} from "react-redux";

import {ThemeProvider, createTheme} from "@mui/material/styles";
import "./globals.css";
import "animate.css";
import {reduxStore} from "../redux/store";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<Provider store={reduxStore}>
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
			</Provider>
		</html>
	);
}
