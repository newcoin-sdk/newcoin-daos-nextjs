import MemberRow from "@/app/daos/[daoOwner]/(proposals)/members/MemberRow";

export async function getDaoMembers( daoOwner: string ) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/members`);
	if(!res.ok) throw new Error("Failed to fetch standard (proposals)");
	return res.json();
}

export default async function MemberList() {
	const proposals = await getDaoMembers("dx.io");
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<MemberRow key={ row.id } proposal={row} />
			)}
		</div>
	);
}