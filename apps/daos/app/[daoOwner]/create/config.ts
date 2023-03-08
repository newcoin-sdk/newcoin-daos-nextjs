import moment from "moment";

export const passRateDefault = 5;
export const newUserDefault = "vectornew.io";
export const proposerDefault = "dx.io";
export const daoOwnerDefault = "dx.io";
export const prvKey = process.env.REACT_APP_IOSDK_PRV_KEY || "";
export const newMemberTypeDefault = "custodian";
export const quantityDefault = {contract: "pool.nco", quantity: "1.0000 GNCO"};

export function voteTimes (
	customEndTime: any,
	customStartTime: any,
	presetEndTimeAddition: any,
) {
	console.log(customEndTime)
	console.log(customStartTime)
	console.log(presetEndTimeAddition)
	let voteEnd;
	const voteStart = customStartTime || moment().add("3", "minutes");
	const voteEndTimeAddition = presetEndTimeAddition.split(" ");
	if ( presetEndTimeAddition ) voteEnd = moment().add( ...voteEndTimeAddition );
	else voteEnd = customEndTime;
	console.log(voteEnd)
	return {
		vote_start: voteStart.utc().format("YYYY-MM-DDTHH:mm:ss"),
		vote_end: voteEnd.utc().format("YYYY-MM-DDTHH:mm:ss")
	}
}
