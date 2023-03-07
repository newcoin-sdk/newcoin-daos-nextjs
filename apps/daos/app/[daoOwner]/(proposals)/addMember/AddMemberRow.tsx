import Link from "next/link";
import VoteBar from "@/app/common/VoteBar";
import Image from "next/image";
import pic from "@/public/pic.png";

//@ts-ignore
export default function AddMemberRow  ({ proposal }) {
	const base = "/daos/" + "dx.io/";
	return (
		<Link href={ base + "/" + proposal.user } className="w-full p-10 pl-20 mb-20 rounded-lg hover:bg-hover mt-5">
			<div className={"flex flex-row items-center mb-10"}>
				<p className={"text-xl font-bold"}>#{ proposal.id }</p>
				<p className={"text-4xl ml-10 truncate pb-1"}>{ proposal.status }</p>
			</div>
			<div className={"flex flex-row items-center justify-between"}>
				<VoteBar {...proposal} />
				<div className={"flex flex-row items-center"}>
					<Image
						className={"rounded-full w-12 h-12 mr-5"}
						src={pic}
						alt={"avatar"}
						priority={true}
					/>
					<p className={"text-2xl font-bold"}> { proposal.proposer }</p>
				</div>
			</div>
		</Link>
	)
}
