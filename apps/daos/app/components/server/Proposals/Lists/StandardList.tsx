import StandardRow from "@/app/components/server/Proposals/Rows/StandardRow";

export type VoteObject = {
	  quantity: string;
	  contract: string;
};

export type StandardProposal = {
	  id: number;
	  title: string;
	  summary: string;
	  proposer: string;
	  vote_start: Date;
	  vote_end: Date;
	  vote_yes: VoteObject;
	  vote_no: VoteObject;
	  pass_rate: number;
	  url: string;
}

const baseUrl = 'http://localhost:3000/api/standard';

async function getStandardProposals( daoId: string ) {
	const res = await fetch(`${ baseUrl }/${ daoId }`);
	if(!res.ok) throw new Error("Failed to fetch standard proposals");
	return res.json();
}

// @ts-ignore
export default async function StandardList({ daoId }) {
	const proposals: StandardProposal[] = await getStandardProposals( daoId );
	return (
		<div className={"flex flex-col items-center"}>
			{ proposals.map(( row: StandardProposal ) =>
				<StandardRow key={row.id} {...row} />
			)}
		</div>
	);
}