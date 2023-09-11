import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

export const useScrollObserver = () => {
	const [page, setPage] = useState(0);
	const observerTarget = useRef<any>(null);

	const handleObserver = useCallback((entries: any[]) => {
		const [target] = entries;
		if (target.isIntersecting) {
			setPage((prev) => prev + 1);
		}
	}, []);

	const observer = new IntersectionObserver(handleObserver, {
		threshold: 0,
		rootMargin: "0px",
	});

	const decreasePage = () => {
		setPage(page - 1);
	};

	useEffect(() => {
		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}

		return () => {
			if (observerTarget.current) {
				observer.unobserve(observerTarget.current);
			}
		};
	}, [observerTarget]);

	return [page, decreasePage, observerTarget] as const;
};
