"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {Provider} from "react-redux";

import {ThemeProvider, createTheme} from "@mui/material/styles";
import "animate.css";
import {ToastContainer, Zoom} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {reduxStore} from "../redux/store";
import "./globals.css";

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
							error: {
								main: "rgba(204, 136, 98, 1)",
							},
						},
					})}>
					<body>
						{children} <ToastContainer transition={Zoom} />
					</body>
				</ThemeProvider>
			</Provider>
		</html>
	);
}
