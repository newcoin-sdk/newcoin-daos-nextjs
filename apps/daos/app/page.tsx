import Link from "next/link";

export default function Page() {
	return (
		<div>
			<h1>App Home Page</h1>
			<Link href={"/dx.io"}>Dx.io DAO</Link>
		</div>
	)
}