"use client"

import { Button } from "antd";

type OpenModalBtnProps = {
	modalType: string;
	buttonTxt: string;
	handler: Function;
};

export default function OpenModalBtn ({ buttonTxt, modalType, handler }: OpenModalBtnProps)  {
	return (
		<Button
			onClick={ () => handler(modalType) }>
			{  buttonTxt }
		</Button>
	)
}