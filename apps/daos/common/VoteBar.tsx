import { ProgressBar } from "./ProgressBar";
import { getLocalTimeData } from "@/common/utils";
import Paragraph2r from "@/common/components/Paragraph2r";

export default function VoteBar ( proposal : any ) {
	const yesVotes = Number(proposal.vote_yes?.quantity?.split(/ /)[0]);
	const noVotes = Number(proposal.vote_no?.quantity?.split(/ /)[0]);
	const timeData = getLocalTimeData(proposal);
	return (
		<div className={"flex flex-col w-10/12"}>
			<div className={"flex flex-row justify-between mb-2"}>
				<Paragraph2r> {yesVotes} yes votes </Paragraph2r>
				<Paragraph2r> {noVotes} no votes </Paragraph2r>
			</div>
			<ProgressBar width={"100%"} proposal={proposal} />
			<div className={"flex flex-row justify-between"}>
				<Paragraph2r>
					{timeData?.time_to_start_secs > 0 ? "Starting" : "Started"} {timeData?.time_to_start}{" "}
				</Paragraph2r>
				<Paragraph2r>
					{timeData?.time_left_seconds > 0 ? "Ending" : "Ended"} {timeData?.time_left_from_now}{" "}
				</Paragraph2r>
			</div>
		</div>
	);
};