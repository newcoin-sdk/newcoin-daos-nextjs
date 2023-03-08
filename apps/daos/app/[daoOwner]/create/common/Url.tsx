import {Form, Input} from "antd";

export const Url = () => {
	return (
		<Form.Item name={"url"}>
			<Input placeholder={"url"} />
		</Form.Item>
	);
}