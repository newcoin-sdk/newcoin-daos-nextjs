"use client"
import useStandard from "@/hooks/useStandard";
import useMember from "@/hooks/useMember";
import useWhitelist from "@/hooks/useWhitelist";
import useStake from "@/hooks/useStake";

export default function Standard() {
	const standardProposals = useStandard();
	const memberProposals = useMember();
	const whiteList = useWhitelist();
	const stake = useStake();
	return (
		<div>
			<h1>Standard Proposals</h1>
			{standardProposals?.data && standardProposals?.data?.map( (row: any ) => <p key={1}>{row.title}</p>)}
			{memberProposals?.data && memberProposals?.data?.map( (row: any ) => <p key={1}>{row.title}</p>)}
			{whiteList?.data && whiteList?.data?.map( (row: any ) => <p key={1}>{row.user} {row.type}</p>)}
			{stake?.data && stake?.data?.map( (row: any ) => <p key={1}>{row.to}</p>)}
		</div>
	)
}