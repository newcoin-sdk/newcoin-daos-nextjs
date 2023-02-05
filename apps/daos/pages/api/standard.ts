import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";
import moment from "moment/moment";

async function createStandard(req: NextApiRequest, res: NextApiResponse) {
	const defaultStartTime = moment().add("2", "minutes").utc().format("YYYY-MM-DDTHH:mm:ss")
	const defaultEndTime = moment().add("5", "minutes").utc().format("YYYY-MM-DDTHH:mm:ss")
	const mocked = {
		title: "Test Proposal",
		summary: "This is a test proposal",
		url: "",
		pass_rate: 0.5,
		proposer: "dx.io",
		dao_owner: "dx.io",
		dao_id: "197",
		vote_start: defaultStartTime,
		vote_end: defaultEndTime,
		proposer_prv_key: process.env.PRV_KEY || "",
	}
	const response = await newcoin.daos.createDaoProposal(mocked);
	res.status(200).json( response );
}

export { createStandard };
