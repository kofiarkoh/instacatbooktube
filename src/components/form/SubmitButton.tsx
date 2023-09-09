import LoadingButton, {LoadingButtonProps} from "@mui/lab/LoadingButton";
import {useFormikContext} from "formik";

export default function SubmitButton(props: LoadingButtonProps) {
	const {submitForm, isValid, isInitialValid} = useFormikContext();
	return (
		<LoadingButton
			variant="contained"
			disableElevation
			{...props}
			sx={{
				transition: "background 1s, color 1s",
				color: "white",
				backgroundColor: "primary.main",
				borderRadius: "10px",
				textTransform: "capitalize",
				borderColor: "transparent",
				fontSize: "18px",
				width: "100%",
				height: "60px",
				"&:disabled": {
					backgroundColor: "rgba(133, 133, 133, 1)",
					color: "white",
				},

				...props.sx,
			}}
			disabled={!(isValid || isInitialValid)}
			onClick={submitForm}>
			{props.children}
		</LoadingButton>
	);
}
