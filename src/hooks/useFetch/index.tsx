import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
	const [responses, setResponses] = useState<string | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((resp) => {
				setIsLoading(false);
				setIsError(false);
				setResponses(resp.data);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
				setResponses(null);
			});
		return () => {};
	}, [url]);

	return [responses, isLoading, isError] as const;
};