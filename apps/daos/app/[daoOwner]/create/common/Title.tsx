import {Form, Input} from "antd";

export const Title = () => {
	return (
		<Form.Item name="title" rules={[{ required: true }]}>
			<Input placeholder="title" />
		</Form.Item>
	);
};
