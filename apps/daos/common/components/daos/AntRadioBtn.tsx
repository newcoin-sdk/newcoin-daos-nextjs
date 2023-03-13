import {DatePicker, Form, Radio} from "antd";

// @ts-ignore
function VoteSelect ({value}) {
	return (
		<Radio.Button
			value={value}
			className={"bg-primary text-white mr-10"
		}>
			{ value }
		</Radio.Button>
	)
}

// @ts-ignore
export default function AntRadioGroup ({name}) {
	return (
		<Form.Item className={"flex flex-row justify-center"} name={name}>
			<p className={"text-center font-bold mb-5"}>How long is your proposal live?</p>
			<Radio.Group>
				<VoteSelect value={"one day"} />
				<VoteSelect value={"one week"} />
				<VoteSelect value={"one month"} />
				<VoteSelect value={"custom"} />
				<DatePicker
					className={"bg-primary text-white placeholder-secondary"}
					showTime
					placeholder={"Vote End"}
					format={"YYYY-MM-DD-HH:mm"}
				/>
			</Radio.Group>
		</Form.Item>
	)
}
