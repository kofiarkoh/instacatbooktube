import React, {useEffect, useState} from "react";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import {useField} from "formik";

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
				helpers.setError(undefined);
			}, 1000);
		}
	}, [meta.error]);
	return (
		<div className={animate ? "animate__animated animate__shakeX" : ""}>
			<TextField
				label={props.label}
				value={meta.value}
				error={meta.error ? true : false}
				helperText={meta.error ? meta.error : null}
				onChange={(e) => helpers.setValue(e.target.value)}
				InputProps={{
					sx: {
						height: props.multiline ? "100px" : "55px",
						borderRadius: "10px",
					},
				}}
				{...props}
				sx={{
					width: "100%",
					backgroundColor: "white",

					...props.sx,
				}}
				placeholder={`law ${animate}`}
			/>
		</div>
	);
}
