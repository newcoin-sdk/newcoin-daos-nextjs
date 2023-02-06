import StandardList from "@/app/components/server/Proposals/Lists/StandardList";

// @ts-ignore
export default async function DaoDetails({ params }) {
	return (
		<div>
			 {/*@ts-expect-error Server Component */}
			<StandardList {...params} />
		</div>
	)
}