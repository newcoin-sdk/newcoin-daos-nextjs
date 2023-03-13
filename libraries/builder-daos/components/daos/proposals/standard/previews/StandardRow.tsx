import Link from "next/link";
import VoteBar from "@/components/daos/proposals/common/VoteBar";
import Image from "next/image";
import pic from "@/public/pic.png";

const proposal = {
		id: 2,
		status: 'created',
		proposer: 'dx.io',
		title: 'test3',
		summary: 'test3',
		url: '//',
		pass_rate: 5,
		votes_counter: 0,
		vote_yes:{"quantity":"1.0000 DXDXIO","contract":"pools2.nco"},
		vote_no:{"quantity":"0.0000 DXDXIO","contract":"pools2.nco"},
		vote_start: '2023-03-08T08:21:19',
		vote_end: '2023-03-08T08:24:19'
	}

//@ts-ignore
export default function StandardRow  ({proposal}) {
	return (
		<Link href={ "/" + proposal.id } className="w-full p-10 pl-20 mb-20 rounded-lg hover:bg-hover mt-5">
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
