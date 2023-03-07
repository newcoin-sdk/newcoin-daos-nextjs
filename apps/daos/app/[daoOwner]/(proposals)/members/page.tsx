import Members from './MemberList'

// @ts-ignore
export default function DaoDetails({ params }) {
	const daoOwner = params.daoOwner;
	return (
		<div className={"flex flex-col"}>
			{/* @ts-expect-error Server Component */}
			<Members daoOwner={ daoOwner } />
		</div>
	);
}