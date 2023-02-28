export async function getMemberRemoveProposals( daoOwner: string) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/removeMember`);
	if(!res.ok) throw new Error("Failed to fetch add member proposals");
	return res.json();
}

export default async function RemoveMemberProposalsList() {
	const proposals = await getMemberRemoveProposals("dx.io");
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<p key={row.id}>{row.user} {row.type}</p>
			)}
		</div>
	);
}