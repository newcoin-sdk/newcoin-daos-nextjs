import Link from "next/link";
import VoteBar from "@/app/common/VoteBar";
import Image from "next/image";
import pic from "@/public/pic.png";

//@ts-ignore
export default function StandardRow  ({ proposal }) {
	const base = "/daos/" + "dx.io/";
	return (
		<Link href={ base + proposal.id } className="w-full p-10 pl-20 mb-20 rounded-lg hover:bg-hover mt-5">
			<div className={"flex flex-row justify-between items-center mb-10"}>
				<div className={"flex flex-row items-center"}>
					<p className={"text-xl font-bold"}>#{ proposal.id }</p>
					<p className={"text-4xl ml-5 truncate pb-1"}>{proposal.title}</p>
				</div>
				<div className={"border border-1 rounded-lg p-5"}>
					<p className={"text-sm"}>status: { proposal.status }</p>
					<p className={"text-sm"}>pass rate: { proposal.pass_rate }</p>
					<p className={"text-sm"}>votes: { proposal.votes_counter }</p>
				</div>
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
