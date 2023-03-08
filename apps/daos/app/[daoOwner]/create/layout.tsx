import "@/globals.css"
// @ts-ignore
export default async function CreateProposalsLayout ({  children }) {
	return (
		<html lang="en">
		<head ><title></title></head>
		<body className={"flex flex-col items-center"}>
			{ children }
		</body>
		</html>
	)
}