import StakeList from "@/app/[daoOwner]/(proposals)/stake/StakeList";

// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<StakeList daoOwner={ daoOwner } />
		</div>
	);
}