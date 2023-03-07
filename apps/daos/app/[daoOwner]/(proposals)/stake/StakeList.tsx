import StakeRow from "@/app/[daoOwner]/(proposals)/stake/StakeRow";
import {CountTab} from "@/app/[daoOwner]/(proposals)/standard/StandardList";
// @ts-ignore
export default async function StakeList() {
	const res = await fetch('http://localhost:3000/daos/dx.io/stake/api');
	const proposals = await res.json();
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