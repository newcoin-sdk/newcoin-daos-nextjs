import {newcoin} from "@/common/config";
import {NextResponse} from "next/server";

export async function GET() {
	const mocked = {
		dao_id: "0",
		limit: 100,
		reverse: true,
	};
	const response = await newcoin.daos.getDaoMemberRemoveProposals(mocked);
	return NextResponse.json(response.rows);
}