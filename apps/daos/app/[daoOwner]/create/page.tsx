"use client"

import {useState} from "react";
import Header1 from "@/common/components/Header1";
import {FormCtrl} from "@/app/[daoOwner]/create/FormCtrl";
import {Select} from "antd";

export default function CreateProposalsPage( daoOwner: string ) {
	const [proposalType, setProposalType] = useState("standard");
	const [proposalCreated, setProposalCreated] = useState(false);
	const [tx, setTx] = useState("");
	return (
		<div className={ "w-11/12 mt-10 flex flex-col justify-center items-center" }>
			<Header1> New { proposalType } Proposal </Header1>
			<Select
				className={ "type-dropdown" }
				onSelect={(value) => setProposalType(value)}
				showArrow={ true }
				bordered={ false }
				defaultValue={ "standard" }>
				<Select.Option value="standard">standard</Select.Option>
				<Select.Option value="addMember">add member</Select.Option>
				<Select.Option value="stake">stake</Select.Option>
				<Select.Option value="inflate">inflate</Select.Option>
				<Select.Option value="deflate">deflate</Select.Option>
				<Select.Option value="removeMember">remove member</Select.Option>
			</Select>
			<FormCtrl
				proposalType={ proposalType }
				setProposalCreated={ setProposalCreated }
				setTx={ setTx }
				daoOwner={ daoOwner }
				proposer={ "dx.io"} />
		</div>
	)
}