import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";

async function getDaoMembers(req: NextApiRequest, res: NextApiResponse) {
	const mocked = {
		dao_id: "0",
		limit: "100",
		reverse: true,
	};
	const { rows } = await newcoin.daos.getDaoWhitelist(mocked);
	res.status(200).json( rows );
}

export default getDaoMembers;