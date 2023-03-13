import {Form, Input} from "antd";

// @ts-ignore
export default function AntInput ({ name }) {
	return (
		<Form.Item className={"w-full"} name={name} rules={[{ required: true }]}>
			<Input
				className={"bg-primary rounded-b-none border-b-1 border-t-0 border-l-0 border-r-0 placeholder-secondary "}
				placeholder={name}
			/>
		</Form.Item>
	)
}