"use client"

// import {useState} from "react";
import {useForm} from "antd/lib/form/Form";
import { Form } from "antd";
import AntInput from "@/common/AntInput";
import AntTextInput from "@/common/AntTextInput";
import AntRadioGroup from "@/common/AntRadioBtn";


// @ts-ignore
export default function Page({ }) {
	const [form] = useForm();
	// const [customTime, setCustomTime] = useState(false);
	// const [voteEnd, setVoteEnd] = useState<any>({});
	// const [tx, setTx] = useState("");
	
	
	return (
		<Form
			className={"w-8/12"}
			name="std-proposal-form"
			form={form}
			onFinish={undefined}
		>
			<AntInput name={"title"} />
			<AntInput name={"pass rate"} />
			<AntInput name={"link"} />
			<AntTextInput name={"summary"} />
			<AntRadioGroup name={"vote_end"} />
			
			
			{/*<DaoChecks daoOwner={daoOwner} currUser={currUser} />*/}
			
			{/*<Row justify={"center"}>*/}
			{/*</Row>*/}
		</Form>
	)
};