import {getProposals} from "@/app/daos/[daoOwner]/(proposals)/standard/page";

// @ts-ignore
export default async function StakeList() {
	const proposals = await getProposals("dx.io", "stake");
	return (
		<div>
			{ proposals.map(( row: any ) =>
				<p key={row.id}>{row.to} {row.quantity.quantity}</p>
			)}
		</div>
	);
}