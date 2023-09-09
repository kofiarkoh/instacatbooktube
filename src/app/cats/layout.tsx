"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {routes} from "../../routes";
import {useAppDispatch} from "../../redux/store";
import {updateToken} from "../../redux/tokenSlice";
import {updateFavoriteCats} from "../../redux/catsSlice";

export default function CatsLayout({children}: {children: React.ReactNode}) {
	const [isloading, setLoading] = useState(true);
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		let apiKey = localStorage.getItem("api_key");
		let favoriteCats = localStorage.getItem("favorite_cats");

		if (apiKey) {
			dispatch(updateToken(apiKey));

			if (favoriteCats) {
				dispatch(updateFavoriteCats(JSON.parse(favoriteCats)));
			}
			setLoading(false);

			return;
		}

		router.push(routes.login);
	}, []);

	if (isloading) {
		return <></>;
	}

	return <>{children}</>;
}
