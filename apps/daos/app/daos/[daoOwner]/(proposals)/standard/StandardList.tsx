import StandardRow from "@/app/daos/[daoOwner]/(proposals)/standard/StandardRow";

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


export async function getStandardProposals( daoOwner: string) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/standard`);
	if(!res.ok) throw new Error("Failed to fetch standard (proposals)");
	return res.json();
}

//@ts-ignore
function CountTab({ count, type }) {
	return (
		<p className={`text-2xl ml-20 opacity-50 cursor-pointer text-lg`}>{ type }
			<span className={"text-sm bg-gray-200 rounded-full px-3 py-1 ml-5 opacity text-primary font-[800] text-center "}> { count }
			</span>
		</p>
	)
}

// @ts-ignore
export default async function StandardList({ daoOwner }) {
	const standardProposals = await getStandardProposals( daoOwner );
	return (
		<div>
			<div className={"flex flex-row items-center justify-end mt-20 mb-5"}>
				<CountTab count={8} type={"Created"}/>
				<CountTab count={8} type={"Approved"}/>
				<CountTab count={2} type={"Active"}/>
				<CountTab count={5} type={"Expired"}/>
			</div>
			<div className={"flex flex-col items-end justify-center"}>
				{ standardProposals.map(( row: StandardProposal ) =>
					<StandardRow proposal={row} key={row.id}  />
				)}
			</div>
		</div>
	);
}

// @ts-ignore
// // eslint-disable-next-line react/display-name
// export default function MemoizedStandardList () {memo(async () => await StandardList({daoOwner: "dx.io"} ))};




