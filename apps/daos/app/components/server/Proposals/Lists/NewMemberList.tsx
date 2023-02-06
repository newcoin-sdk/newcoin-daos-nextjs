
export type MemberProposal = {
	id: number;
	user: string;
	type: string;
	proposer: string;
	vote_start: Date;
	vote_end: Date;
	pass_rate: number;
}

// const baseUrl = 'http://localhost:3000/api';
//
// async function getMemberProposals() {
// 	const res = await fetch(`${baseUrl}/member`);
// 	if(!res.ok) throw new Error("Failed to fetch member proposals");
// 	return res.json();
// }
// export default async function NewMemberList() {
// 	const proposals: MemberProposal[] = await getMemberProposals();
// 	return (
// 		<div>
// 			{ proposals.map(( row: MemberProposal ) =>
// 				<MemberRow key={row.id} {...row} />
// 			)}
// 		</div>
// 	);
// }