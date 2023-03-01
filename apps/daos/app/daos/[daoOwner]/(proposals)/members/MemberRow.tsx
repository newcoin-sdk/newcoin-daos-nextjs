import Link from "next/link";
import Image from "next/image";
import pic from "@/public/pic.png";

//@ts-ignore
export default function MemberRow  ({ proposal }) {
	const base = "/daos/" + "dx.io/";
	return (
		<Link href={ base + "/" + proposal.user } className=" flex flex-row items-center w-full p-10 mb-20 rounded-lg hover:bg-hover mt-5">
			<Image
				className={"rounded-full w-20 h-20 mr-10"}
				src={pic}
				alt={"avatar"}
				priority={true}
			/>
			<div className={"flex flex-col"}>
				<p className={"text-2xl mr-5"}>{ proposal.user }</p>
				<p className={"text-3xl mr-5"}>{ proposal.type }</p>
			</div>
		</Link>
	)
}
