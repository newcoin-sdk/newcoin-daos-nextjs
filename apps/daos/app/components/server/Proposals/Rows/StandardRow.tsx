import Link from "next/link";
import { StandardProposal } from "@/app/components/server/Proposals/Lists/StandardList";
import CustomButton from "@/app/components/client/buttons/Button";
import VoteBar from "@/app/components/server/VoteBar";
import AviLink from "@/app/components/server/AviLink";

export default function StandardRow ( proposal: StandardProposal ) {
	return (
		<div className="w-11/12 p-10 mb-20 rounded-lg hover:bg-hover">
			<Link href={""} >
				<div className={"mb-10 flex flex-row justify-between items-center"}>
					<div className={"flex flex-row items-center"}>
						<p className={"text-xl"}>#{ proposal.id }</p>
						<p className={"text-4xl ml-5 w-900 truncate"}>{ proposal.title }</p>
					</div>
					<CustomButton>View</CustomButton>
				</div>
				<div className={"flex-row items-center justify-between"}>
					<VoteBar proposal={proposal} />
					<AviLink />
				</div>
			</Link>
		</div>
	)
}
