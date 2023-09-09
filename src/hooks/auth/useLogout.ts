import {useRouter} from "next/navigation";
import {routes} from "../../routes";

export const useLogout = () => {
	const router = useRouter();

	const logout = () => {
		localStorage.clear();
		router.push(routes.login);
	};

	return [logout];
};
