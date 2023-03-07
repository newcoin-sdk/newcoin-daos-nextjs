//@ts-ignore
export default function Paragraph2b({ children }) {
	/*
		Paragraph 2b Component
		bold font
		16px font size
	*/
	return (
		<p className={"font-bold text-base"}>
			{children}
		</p>
	);
}