import {NextApiRequest, NextApiResponse} from "next";
import {newcoin} from "@/pages/config";

async function getWhitelist(req: NextApiRequest, res: NextApiResponse) {
  const { rows } = await newcoin.daos.getDaoWhitelist({
    dao_owner: "dx.io",
    limit: "100",
  });
  res.status(200).json( rows );
}

export default getWhitelist
