import {PassRate} from "@/app/[daoOwner]/create/common/PassRate";
import {Title} from "@/app/[daoOwner]/create/common/Title";
import {Summary} from "@/app/[daoOwner]/create/common/Summary";
import {VoteSelection} from "@/app/[daoOwner]/create/common/VoteSelection";
import {Url} from "@/app/[daoOwner]/create/common/Url";
import Form, {useForm} from "antd/lib/form/Form";
import {
	daoOwnerDefault,
	proposerDefault,
} from "@/app/[daoOwner]/create/config";
import {useState} from "react";
import {Button} from "antd";
import moment from "moment";

export type StandardFormProps = {
	daoOwner: string,
	proposer: string,
	setProposalCreated: (value: boolean) => void,
	setTx: (value: string) => void,
}

export default function StandardForm( { daoOwner } : StandardFormProps ) {
	const [form] = useForm();
	const [presetEndTime, setPresetEndTime] = useState<any>("");
	const [useCustomTime, setUseCustomTime] = useState<boolean>(false);
	
	async function createStandardProposal({
		title,
		pass_rate,
		summary,
		url,
		custom_start_time,
		custom_end_time,
		vote_start = custom_start_time || moment().add(2, "minutes").utc() .format("YYYY-MM-DDTHH:mm:ss"),
		vote_end = custom_end_time || presetEndTime.utc().format("YYYY-MM-DDTHH:mm:ss"),
		dao_owner = daoOwnerDefault || daoOwner,
		proposer_prv_key = "5JGP9mDb1b5p6b1y8jxjVkdnzbkr1KLzJuhysVQBUMDUepfDFXh",
		proposer = proposerDefault,
		setTx,
		setProposalCreated,
	} : any
	){
		console.log({title, pass_rate, summary, url, dao_owner, vote_start, vote_end, proposer_prv_key, proposer});
		await fetch(`http://localhost:3000/dx.io/standard`, {
			method: "POST",
			body: JSON.stringify( {
				dao_owner,
				title,
				pass_rate,
				summary,
				vote_start,
				vote_end,
				url,
				proposer_prv_key,
				proposer,
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Newsafe ${proposer_prv_key}`,
			}
		}).then( res => {
			console.log(res);
		}).catch( err => {
			console.log(err);
		})
	}
	
	return (
		<Form className={"new-proposal-form"}
			name="std-proposal-form"
			form={form}
            onFinish={ createStandardProposal }>
			<Title />
			<PassRate />
			<Summary />
			<VoteSelection
				setPresetEndTime={setPresetEndTime}
				setUseCustomTime={setUseCustomTime}
				useCustomTime={useCustomTime}
			/>
			<Url />
			<Button htmlType="submit"> Submit </Button>
		</Form>
	)
}