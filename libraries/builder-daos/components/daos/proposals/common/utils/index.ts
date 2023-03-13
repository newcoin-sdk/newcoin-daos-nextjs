import { StandardProposal } from "@/../../../../libraries/builder-daos/components/daos/proposals/StandardList";
import moment from "moment";

export const getLocalTimeData = ( proposal : StandardProposal ) => {
	const mockVoteStart = moment().format("YYYY-MM-DD HH:mm:ss");
	const mockVoteEnd = moment().format("YYYY-MM-DD HH:mm:ss");
	const voteStart = proposal.vote_start || mockVoteStart;
	const voteEnd = proposal.vote_end || mockVoteEnd;
	
	const voteStartDateLocal = new Date(voteStart).toUTCString();
	const voteEndDateLocal = new Date(voteEnd).toUTCString();
	const timeLeftInSeconds = moment(voteEnd).diff(moment(), "seconds");
	const timeLeftInSecondsStart = moment(voteStart).diff(moment(), "seconds");
	const timeLeftFromStart = moment(new Date(voteStart)).fromNow();
	const timeLeftFromEnd = moment(new Date(voteEnd)).fromNow();
	
	return {
		time_start_date: voteStartDateLocal,
		time_end_date: voteEndDateLocal,
		time_left_seconds: timeLeftInSeconds,
		time_left_from_now: timeLeftFromEnd,
		time_to_start: timeLeftFromStart,
		time_to_start_secs: timeLeftInSecondsStart,
	};
};
