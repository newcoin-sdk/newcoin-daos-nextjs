import Link from "next/link";
import { CustomButton } from "@/app/components/client/buttons/Buttons";
import VoteBar from "@/app/components/server/VoteBar";
import AviLink from "@/app/components/server/AviLink";

//@ts-ignore
export default function StandardRow  ({ proposal }) {
	return (
		<Link href={`dx.io/${proposal.id}`}  className="w-full p-10 pl-20 mb-20 rounded-lg hover:bg-hover">
			<div className={"mb-10 flex flex-row justify-between items-center"}>
				<div className={"flex flex-row items-center"}>
					<p className={"text-xl font-bold"}>#{ proposal.id }</p>
					<p className={"text-4xl ml-10 truncate pb-1"}>{ proposal.title }</p>
				</div>
				<CustomButton>View</CustomButton>
			</div>
			<div className={"flex flex-row items-center justify-between mb-5"}>
				<VoteBar {...proposal} />
				<AviLink />
			</div>
		</Link>
	)
}
