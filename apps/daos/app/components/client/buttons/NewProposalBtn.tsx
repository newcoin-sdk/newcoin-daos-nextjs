"use client"

import { Button } from "antd";
const baseUrl = 'http://localhost:3000/api';

export type StandardProposalPayload = {
	dao_owner: string;
	title: string;
	summary: string;
	proposer: string;
	proposer_prv_key: string;
	vote_start: Date;
	vote_end: Date;
	pass_rate: number;
	url: string;
};

export type MemberProposalPayload = {
	dao_owner: string;
	user: string;
	type: string;
	proposer: string;
	proposer_prv_key: string;
	vote_start: Date;
	vote_end: Date;
	pass_rate: number;
};

export type StakeProposalPayload = {
	proposer: string;
	to: string;
	quantity: number;
	proposer_prv_key: string;
	vote_start: Date;
	vote_end: Date;
	pass_rate: number;
};


export async function createStandardProposal( payload: StandardProposalPayload ) {
	const res = await fetch(`${baseUrl}/standard/create`, {
		method: 'POST',
		body: JSON.stringify(payload),
	});
	if(!res.ok) throw new Error("Failed to create standard proposal");
	return res.json();
}

export async function createMemberProposal( payload: MemberProposalPayload ) {
	const res = await fetch(`${baseUrl}/member/create`, {
		method: 'POST',
		body: JSON.stringify(payload),
	});
	if(!res.ok) throw new Error("Failed to create standard proposal");
	return res.json();
}

export async function createStakeProposal( payload: StakeProposalPayload ) {
	const res = await fetch(`${baseUrl}/stake/create`, {
		method: 'POST',
		body: JSON.stringify(payload),
	});
	if(!res.ok) throw new Error("Failed to create standard proposal");
	return res.json();
}

export async function NewProposalBtn( payload: StandardProposalPayload ) {
  return (
	<Button
	  onClick={ () => createStandardProposal( payload ) }
	> Create Proposal
	</Button>
  );
}