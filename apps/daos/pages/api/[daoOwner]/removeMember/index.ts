import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";

async function getRemoveMemberProposals(req: NextApiRequest, res: NextApiResponse) {
	const mocked = {
		dao_id: "0",
		limit: 100,
	};
	const { rows } = await newcoin.daos.getDaoMemberRemoveProposals(mocked);
	res.status(200).json( rows );
}

export default getRemoveMemberProposals;
