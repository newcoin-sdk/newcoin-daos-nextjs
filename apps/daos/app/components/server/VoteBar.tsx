import { ProgressBar } from "../client/ProgressBar";
import Paragraph2b from "@/app/components/server/Paragraph2b";

// @ts-ignore
export default function VoteBar ({ proposal }) {
	const yesVotes = Number(proposal?.vote_yes?.quantity?.split(/ /)[0]);
	const noVotes = Number(proposal?.vote_no?.quantity?.split(/ /)[0]);
	const timeData = proposal?.time_data;
	return (
		<div className={"flex flex-col w-11/12"}>
			<div className={"flex flex-row justify-between mb-2"}>
				<Paragraph2b> {yesVotes} yes votes </Paragraph2b>
				<Paragraph2b> {noVotes} no votes </Paragraph2b>
			</div>
			<ProgressBar width={"100%"} proposal={proposal} />
			<div className={"flex flex-row justify-between"}>
				<Paragraph2b>
					{timeData?.time_to_start_secs > 0 ? "Starting" : "Started"} {timeData?.time_to_start}{" "}
				</Paragraph2b>
				<Paragraph2b>
					{timeData?.time_left_seconds > 0 ? "Ending" : "Ended"} {timeData?.time_left_from_now}{" "}
				</Paragraph2b>
			</div>
		</div>
	);
};