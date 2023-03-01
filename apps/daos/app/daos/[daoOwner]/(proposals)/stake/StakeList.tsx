import StakeRow from "@/app/daos/[daoOwner]/(proposals)/stake/StakeRow";
import {CountTab} from "@/app/daos/[daoOwner]/(proposals)/standard/StandardList";

export async function getStakeProposals( daoOwner: string) {
	const baseUrl = 'http://localhost:3000/api';
	const res = await fetch(`${ baseUrl }/${ daoOwner }/stake`);
	if(!res.ok) throw new Error("Failed to fetch standard (proposals)");
	return res.json();
}
// @ts-ignore
export default async function StakeList() {
	const proposals = await getStakeProposals("dx.io");
	return (
		<div>
			<div className={"flex flex-row items-center justify-end mt-20 mb-5"}>
				<CountTab count={8} type={"Created"}/>
				<CountTab count={8} type={"Approved"}/>
				<CountTab count={2} type={"Active"}/>
				<CountTab count={5} type={"Expired"}/>
			</div>
			<div className={"flex flex-col items-end justify-center"}>
				{ proposals.map(( row: any ) =>
					<StakeRow key={row.id} proposal={row} />
				)}
			</div>
		</div>

	);
}