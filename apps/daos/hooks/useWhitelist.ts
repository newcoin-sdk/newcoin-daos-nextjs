"use client"
import useSWR from 'swr';

function useWhitelist () {
	// @ts-ignore
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR(`/api/whitelist`, fetcher);
	return {
		data,
		isLoading,
		isError: error
	}
}

export default useWhitelist;