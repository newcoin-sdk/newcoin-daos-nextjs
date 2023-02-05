import useSWR from 'swr';

function useStake () {
	// @ts-ignore
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/stake`, fetcher);
	return {
		data,
		isLoading,
		isError: error
	}
}

export default useStake;