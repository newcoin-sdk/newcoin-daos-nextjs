"use client"

import {useForm} from "antd/lib/form/Form";
import {Button, Form} from "antd";

async function createProposals( daoOwner: string, type: string ) {
	const baseUrl = 'http://localhost:3000/api';
	let start = new Date();
	let end = start;
	start = new Date(start.setSeconds(start.getSeconds() + 7));
	end   = new Date(end.setSeconds(end.getSeconds() + 27));
	const prv_key = "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh";
	return await fetch(`${ baseUrl }/${ daoOwner }/new`, {
		method: 'POST',
		body: JSON.stringify({
			proposer: "dx.io",// name,
			dao_owner: "dx.io",
			type: "",
			pass_rate: 5,
			vote_start: start.toISOString().slice(0,-5), //now.toISOString(),
			vote_end:  end.toISOString().slice(0,-5),  //new Date(now.getTime()+ 8*24*60*60*1000).toISOString()
			user: "vectornew.io",
			proposer_prv_key: prv_key,
		}),
		headers: { "Authorization": `newsafe ${prv_key}`, "Content-Type": "application/json" }
	});
}
// @ts-ignore
export default function Page({ }) {
	const [form] = useForm();
	// const [customTime, setCustomTime] = useState(false);
	// const [voteEnd, setVoteEnd] = useState<any>({});
	// const [tx, setTx] = useState("");
	
	async function submitCreateProposal({}) {
		const response = await createProposals( "dx.io", "custodian" );

	}
	
	return (
		<Form
			className={"w-8/12"}
			name="std-proposal-form"
			form={form}
			onFinish={submitCreateProposal}
		>
			{/*<AntInput name={"title"} />*/}
			{/*<AntInput name={"pass rate"} />*/}
			{/*<AntInput name={"link"} />*/}
			{/*<AntTextInput name={"summary"} />*/}
			{/*<AntRadioGroup name={"vote_end"} />*/}
			<Button type="primary" htmlType="submit">Create</Button>
			
			
			{/*<DaoChecks daoOwner={daoOwner} currUser={currUser} />*/}
			
			{/*<Row justify={"center"}>*/}
			{/*</Row>*/}
		</Form>
	)
};