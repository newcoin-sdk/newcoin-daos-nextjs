import MemberRow from "@/app/[daoOwner]/(proposals)/members/MemberRow";

export default async function MemberList() {
	const res = await fetch('http://localhost:3000/daos/dx.io/members/api');
	const proposals = await res.json();
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<MemberRow key={ row.id } proposal={row} />
			)}
		</div>
	);
}