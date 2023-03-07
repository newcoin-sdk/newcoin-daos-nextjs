import AddMemberProposalsList from "@/app/[daoOwner]/(proposals)/(members)/addMember/AddMemberProposalsList";

// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<AddMemberProposalsList daoOwner={ daoOwner } />
		</div>
	);
}