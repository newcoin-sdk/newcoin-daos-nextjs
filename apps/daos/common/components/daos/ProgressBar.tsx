"use client"

import { Progress } from "antd";

//@ts-ignore
export const ProgressBar = ({ proposal, width }) => {
	const toNumber = (vote: string) => Number(vote?.split(/ /)[0]);
	//@ts-ignore
	const percentageOfTotal = (a, tot) => (100 * a) / tot;
	//@ts-ignore
	const relativePercentage = (a, b) => percentageOfTotal(a, a + b) || 1;
	return (
		<Progress
			style={{ width: width || "100%" }}
			strokeColor={"#C46EF7"}
			percent={100} // pink color
			success={{
				percent: relativePercentage(toNumber(proposal?.vote_yes?.quantity), toNumber(proposal?.vote_no?.quantity)),
				strokeColor: "#BAFF00",
			}} // yellow color
			showInfo={false}
		/>
	);
};
