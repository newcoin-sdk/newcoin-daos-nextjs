"use client"
import useWhitelist from "@/hooks/useWhitelist";

export default function Whitelist() {
	const { data, isError, isLoading } = useWhitelist("dx.io");
	return (
		<div>
			<h1>Whitelist</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error</p>}
			{data && data.map( (row: any ) => <p key={1}>{row.user} {row.type}</p>)}
		</div>
	)
}