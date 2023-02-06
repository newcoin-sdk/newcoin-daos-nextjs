import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";

async function getStandard(req: NextApiRequest, res: NextApiResponse) {
	const dao_id = req.query.daoId!.toString();
	const mocked = {
		dao_id,
		limit: 100,
		reverse: true,
	};
	const { rows } = await newcoin.daos.getDaoProposals(mocked);
	res.status(200).json( rows );
}

export default getStandard;
