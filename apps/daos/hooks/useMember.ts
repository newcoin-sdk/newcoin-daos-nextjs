import useSWR from 'swr';

function useMember () {
	// @ts-ignore
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/member`, fetcher);
	return {
		data,
		isLoading,
		isError: error
	}
}

export default useMember;