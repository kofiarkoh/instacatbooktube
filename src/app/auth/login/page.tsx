"use client";
import React, {PropsWithChildren} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InstaIcon from "@/assets/images/insta.svg";
import CatIcon from "@/assets/images/cat.svg";
import BookIcon from "@/assets/images/book.svg";
import YoutubeIcon from "@/assets/images/tube.svg";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import FormTextField from "../../../components/form/FormTextField";
import SubmitButton from "../../../components/form/SubmitButton";

const valdiationSchema = Yup.object().shape({
	apikey: Yup.string().required(),
});
export default function Page() {
	const handleLogin = () => {};
	return (
		<div
			style={{
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
					<IconRow>
						<div>
							<InstaIcon />
						</div>
						<div>
							<CatIcon />
						</div>
					</IconRow>
					<IconRow>
						<div>
							<BookIcon />
						</div>
						<div>
							<YoutubeIcon />
						</div>
					</IconRow>
				</div>
				<Formik
					initialValues={{apikey: ""}}
					validationSchema={valdiationSchema}
					validateOnBlur={false}
					validateOnMount={false}
					validateOnChange={false}
					onSubmit={handleLogin}>
					<>
						<div>
							<FormTextField name="apikey" id="" label="" sx={{width: "100%"}} />
						</div>
						<div>
							<SubmitButton
								variant="contained"
								sx={{
									mt: 4,
								}}>
								Sign In
							</SubmitButton>
						</div>
					</>
				</Formik>
			</Box>
		</div>
	);
}

function IconRow(props: PropsWithChildren) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",

				justifyContent: "center",
				alignItems: "center",
				gap: "40px",
				marginBottom: "20px",
			}}>
			{props.children}
		</div>
	);
}
