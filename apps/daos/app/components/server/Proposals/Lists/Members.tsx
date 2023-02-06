
const baseUrl = 'http://localhost:3000/api';

async function getWhitelist() {
	const res = await fetch(`${baseUrl}/whitelist`);
	if(!res.ok) throw new Error("Failed to fetch member proposals");
	return res.json();
}

type DaoMember = {
	id: number;
	user: string;
	type: string;
};

export default async function WhiteList() {
	const proposals: DaoMember[] = await getWhitelist();
	return (
		<div>
			{ proposals.map(( row: DaoMember ) =>
				<p key={row.id}>{row.user} {row.type}</p>
			)}
		</div>
	);
}