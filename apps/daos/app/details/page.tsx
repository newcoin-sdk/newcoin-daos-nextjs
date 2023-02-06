import StandardList from "@/app/components/server/Proposals/Lists/StandardList";

export default async function DaoDetails() {
	return (
		<div>
			 {/*@ts-expect-error Server Component */}
			<StandardList />
		</div>
	)
}