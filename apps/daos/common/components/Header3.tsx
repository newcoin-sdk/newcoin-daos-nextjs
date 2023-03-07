//@ts-ignore
export default function Header3({ children }) {
	/*
		Header 3 Component
		24px font size
		line height 32px
		bold font
	*/
	return (
		<h3 className={"text-2xl font-bold"}>
			{children}
		</h3>
	);
}