import useSWR from 'swr';

function useStandard () {
	// @ts-ignore
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/standard`, fetcher);
	return {
		data,
		isLoading,
		isError: error
	}
}

export default useStandard;