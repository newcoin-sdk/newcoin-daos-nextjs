import AddMemberRow from "@/app/[daoOwner]/(proposals)/addMember/AddMemberRow";

export default async function AddMemberProposalsList() {
	const res = await fetch('http://localhost:3000/daos/dx.io/addMember/api');
	const proposals = await res.json();
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<AddMemberRow key={ row.id } proposal={row} />
			)}
		</div>
	);
}