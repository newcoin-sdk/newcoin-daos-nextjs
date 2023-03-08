import {Form, Input} from "antd";

export function UserSelection() {
	return (
		<Form.Item
			name="user_selection"
			rules={ [{ required: true }] }
		>
			<Input placeholder="user selection"/>
		</Form.Item>
	)
}