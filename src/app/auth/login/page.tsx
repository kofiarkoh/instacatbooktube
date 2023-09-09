"use client";
import BookIcon from "@/assets/images/book.svg";
import CatIcon from "@/assets/images/cat.svg";
import InstaIcon from "@/assets/images/insta.svg";
import YoutubeIcon from "@/assets/images/tube.svg";
import Box from "@mui/material/Box";
import {Formik, FormikHelpers} from "formik";
import {useRouter} from "next/navigation";
import {PropsWithChildren} from "react";
import * as Yup from "yup";
import FormTextField from "../../../components/form/FormTextField";
import SubmitButton from "../../../components/form/SubmitButton";
import {useLazyGetFavouriteCatsQuery} from "../../../redux/rtk/catsApi";
import {useAppDispatch} from "../../../redux/store";
import {updateToken} from "../../../redux/tokenSlice";
import {toast} from "react-toastify";

const valdiationSchema = Yup.object().shape({
	apikey: Yup.string().required(),
});
const initialData = {apikey: ""};

export default function Page() {
	const [getFavouriteCats, {isLoading}] = useLazyGetFavouriteCatsQuery();
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogin = (
		data: typeof initialData,
		helpers: FormikHelpers<typeof initialData>
	) => {
		dispatch(updateToken(data.apikey));
		getFavouriteCats({})
			.unwrap()
			.then((response) => {
				localStorage.setItem("api_key", data.apikey);
				toast("Login successful.", {
					type: "success",
				});
				router.push("/cats");
			})
			.catch((error) => {
				console.log(error);
				helpers.setErrors({apikey: "Invalid API key"});
			});
	};

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
					initialValues={initialData}
					validationSchema={valdiationSchema}
					validateOnBlur={false}
					validateOnMount={false}
					validateOnChange={false}
					onSubmit={handleLogin}>
					<>
						<div>
							<FormTextField
								name="apikey"
								id=""
								label=""
								sx={{width: "100%", mt: 4}}
							/>
						</div>
						<div>
							<SubmitButton
								variant="contained"
								loading={isLoading}
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
