import {Form, Input} from "antd";

// @ts-ignore
export default function AntTextInput({name}) {
	return (
		<Form.Item name={name} rules={[{ required: true }]}>
			<Input.TextArea
				className={"bg-primary placeholder-secondary "}
				placeholder={name}
			/>
		</Form.Item>
	)
}