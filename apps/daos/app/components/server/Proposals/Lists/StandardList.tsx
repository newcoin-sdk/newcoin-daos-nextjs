import StandardRow from "@/app/components/server/Proposals/Rows/StandardRow";
import {StandardProposal} from "@/app/(feature-routes)/dao/[daoOwner]/page";

// @ts-ignore
export default function StandardList({ proposals }) {
	return (
		<div className={"flex flex-col items-end justify-center"}>
			{ proposals.map(( row: StandardProposal ) =>
				<StandardRow proposal={row} key={row.id}  />
			)}
		</div>
	);
}