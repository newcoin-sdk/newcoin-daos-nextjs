export async function getMemberAddProposals( daoOwner: string) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/addMember`);
	if(!res.ok) throw new Error("Failed to fetch add member proposals");
	return res.json();
}

export default async function AddMemberProposalsList() {
	const proposals = await getMemberAddProposals("dx.io");
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<p key={row.id}>{row.user} {row.type}</p>
			)}
		</div>
	);
}