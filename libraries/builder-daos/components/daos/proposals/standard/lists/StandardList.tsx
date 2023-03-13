import StandardRow from "@/components/daos/proposals/standard/previews/StandardRow";

export type VoteObject = {
	quantity: string;
	contract: string;
};

export type StandardProposal = {
	id: number;
	title: string;
	summary: string;
	proposer: string;
	vote_start: string;
	vote_end: string;
	vote_yes: VoteObject;
	vote_no: VoteObject;
	pass_rate: number;
	url: string;
	status: string;
	votes_counter: number;
}

//@ts-ignore
export function CountTab({ count, type }) {
	return (
		<p className={`text-2xl ml-10 opacity-50 cursor-pointer text-lg`}>{ type }
			<span className={"text-sm bg-gray-200 rounded-full px-3 py-1 ml-5 opacity text-primary font-[800] text-center "}> { count }
			</span>
		</p>
	)
}

const data = [
	{
		id: 2,
		status: 'created',
		proposer: 'dx.io',
		title: 'test3',
		summary: 'test3',
		url: '//',
		pass_rate: 5,
		votes_counter: 0,
		vote_yes:{"quantity":"1.0000 DXDXIO","contract":"pools2.nco"},
		vote_no:{"quantity":"0.0000 DXDXIO","contract":"pools2.nco"},
		vote_start: '2023-03-08T08:21:19',
		vote_end: '2023-03-08T08:24:19'
	},
	{
		id: 2,
		status: 'created',
		proposer: 'dx.io',
		title: 'test3',
		summary: 'test3',
		url: '//',
		pass_rate: 5,
		votes_counter: 0,
		vote_yes:{"quantity":"1.0000 DXDXIO","contract":"pools2.nco"},
		vote_no:{"quantity":"0.0000 DXDXIO","contract":"pools2.nco"},
		vote_start: '2023-03-08T08:21:19',
		vote_end: '2023-03-08T08:24:19'
	},
	{
		id: 2,
		status: 'created',
		proposer: 'dx.io',
		title: 'test3',
		summary: 'test3',
		url: '//',
		pass_rate: 5,
		votes_counter: 0,
		vote_yes:{"quantity":"1.0000 DXDXIO","contract":"pools2.nco"},
		vote_no:{"quantity":"0.0000 DXDXIO","contract":"pools2.nco"},
		vote_start: '2023-03-08T08:21:19',
		vote_end: '2023-03-08T08:24:19'
	}];

// @ts-ignore
export default function StandardList() {
	return (
		<div>
			<div className={"flex flex-row items-center justify-end mb-10"}>
				<CountTab count={8} type={"Created"}/>
				<CountTab count={8} type={"Approved"}/>
				<CountTab count={2} type={"Active"}/>
				<CountTab count={5} type={"Expired"}/>
			</div>
			<div className={"flex flex-col items-end justify-center"}>
				{  data.map(( row: StandardProposal ) =>
					<StandardRow proposal={row} key={row.id}  />
				)}
			</div>
		</div>
	);
}




