
import StandardList from "@/app/[daoOwner]/(proposals)/standard/StandardList";
// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<StandardList daoOwner={ daoOwner } />
		</div>
	);
}