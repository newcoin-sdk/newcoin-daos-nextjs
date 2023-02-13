import { getProposals } from "@/app/daos/[daoOwner]/(proposals)/standard/page";

export default async function MemberList() {
	const proposals = await getProposals("dx.io", "whitelist");
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<p key={row.id}>{row.user} {row.type}</p>
			)}
		</div>
	);
}