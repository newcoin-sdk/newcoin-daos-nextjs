import {newcoin} from "@/common/config";
import {NextResponse} from "next/server";

export type ProposalGetRequest = {
	dao_owner: string;
	limit?: number;
	reverse?: boolean;
};

export async function GET( input: ProposalGetRequest ) {
	const response = await newcoin.daos.getDaoProposals( input );
	return NextResponse.json( response.rows );
}

export type StandardProposalParams = {
	title: string,
	summary: string,
	url: string,
	pass_rate: number,
	proposer: string,
	dao_owner: string,
	vote_start: string,
	vote_end: string,
	proposer_prv_key: string,
}

export async function POST( input: any ) {
	const response = await newcoin.daos.getDaoProposals( input );
	console.log( response );
	return response;
}

