"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {routes} from "../../routes";

export default function CatsLayout({children}: {children: React.ReactNode}) {
	const [isloading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		let apiKey = localStorage.getItem("api_key");

		if (apiKey) {
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
