import RemoveMemberProposalsList from "@/app/daos/[daoOwner]/(proposals)/removeMember/RemoveMemberProposalsList";

// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<RemoveMemberProposalsList daoOwner={ daoOwner } />
		</div>
	);
}