const baseUrl = 'http://localhost:3000/api';

type StakeProposal = {
	id: number;
	to: string;
	proposer: string;
	vote_start: Date;
	vote_end: Date;
	pass_rate: number;
	quantity: number;
};

async function getStake() {
	const res = await fetch(`${baseUrl}/stake`);
	if (!res.ok) throw new Error("Failed to fetch stake");
	return res.json();
}

export default async function StakeList() {
	const proposals: StakeProposal[] = await getStake();
	return (
		<div>
			{ proposals.map(( row: StakeProposal ) =>
				<p key={row.id}>{row.to} {row.quantity}</p>
			)}
		</div>
	);
}