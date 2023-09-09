import React, {useEffect, useState} from "react";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import {useField} from "formik";
import Typography from "@mui/material/Typography";

type FormikInputProps = {
	name: string;
};
type FormTextFieldProps = FormikInputProps & TextFieldProps;

export default function FormTextField(props: FormTextFieldProps) {
	const [field, meta, helpers] = useField(props.name);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (meta.error) {
			setAnimate(true);
			setTimeout(() => {
				setAnimate(false);
			}, 1000);
		}
	}, [meta.error]);
	return (
		<>
			<div className={animate ? "animate__animated animate__shakeX" : ""}>
				<TextField
					label={props.label}
					value={meta.value}
					error={meta.error ? true : false}
					onChange={(e) => helpers.setValue(e.target.value)}
					InputProps={{
						sx: {
							borderRadius: "10px",
						},
					}}
					{...props}
					sx={{
						width: "100%",
						backgroundColor: "white",

						...props.sx,
					}}
				/>
			</div>
			{meta.error && (
				<Typography
					variant="body1"
					color="initial"
					sx={{color: "red", fontWeight: "300", mt: "5px"}}>
					{meta.error}
				</Typography>
			)}
		</>
	);
}
