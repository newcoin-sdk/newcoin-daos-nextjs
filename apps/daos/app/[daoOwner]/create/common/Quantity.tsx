import { Form, Input } from "antd";

export const Quantity = () => {
	return (
		<Form.Item name={"quantity"}>
			<Input placeholder={"quantity"} />
		</Form.Item>
	);
};
