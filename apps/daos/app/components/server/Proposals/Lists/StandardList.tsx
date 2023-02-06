import StandardRow from "@/app/components/server/Proposals/Rows/StandardRow";

export type StandardProposal = {
	  id: number;
	  title: string;
	  summary: string;
	  proposer: string;
	  vote_start: Date;
	  vote_end: Date;
	  pass_rate: number;
	  url: string;
}

const baseUrl = 'http://localhost:3000/api';

async function getStandardProposals() {
	const res = await fetch(`${baseUrl}/standard`);
	if(!res.ok) throw new Error("Failed to fetch standard proposals");
	return res.json();
}

export default async function StandardList() {
	const proposals: StandardProposal[] = await getStandardProposals();
	return (
		<div className={"flex flex-col items-center"}>
			{ proposals.map(( row: StandardProposal ) =>
				<StandardRow key={row.id} {...row} />
			)}
		</div>
	);
}