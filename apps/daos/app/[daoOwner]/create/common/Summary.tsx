import {Form, Input} from "antd";

export const Summary = () => {
	return (
		<Form.Item
			name="summary"
			rules={[{ required: true }]}
		>
			<Input.TextArea
				className={"new-proposal-summary"}
				placeholder="Explain your proposal to the community!"
			/>
		</Form.Item>
	)
}