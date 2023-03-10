import RemoveMemberRow from "@/app/[daoOwner]/(proposals)/(members)/removeMember/RemoveMemberRow";

//@ts-ignore
export function CountTab({ count, type }) {
	return (
		<p className={`text-2xl ml-20 opacity-50 cursor-pointer text-lg`}>{ type }
			<span className={"text-sm bg-gray-200 rounded-full px-3 py-1 ml-5 opacity text-primary font-[800] text-center "}> { count }
			</span>
		</p>
	)
}

export default async function RemoveMemberProposalsList() {
	const res = await fetch('http://localhost:3000/daos/dx.io/removeMember/api');
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
				<RemoveMemberRow key={ row.id } proposal={row} />
			)}
		</div>
	</div>
	);
}