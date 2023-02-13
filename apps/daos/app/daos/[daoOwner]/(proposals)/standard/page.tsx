import StandardList from "@/app/daos/[daoOwner]/(proposals)/standard/StandardList";

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


export async function getProposals( daoOwner: string, type: string ) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/${ type }`);
	if(!res.ok) throw new Error("Failed to fetch standard (proposals)");
	return res.json();
}

// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<StandardList daoOwner={ daoOwner } />
		</div>
	);
}