import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";

async function newStandard(req: NextApiRequest, res: NextApiResponse) {
	const dao_owner  = req.query!.daoOwner!.toString();
	const mocked = {
		dao_owner,
		limit: 100,
		reverse: true,
	};
	const response = await newcoin.daos.getDaoProposals(mocked);
	res.status(200).json(response);
}

export default newStandard;
