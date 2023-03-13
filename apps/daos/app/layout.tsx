import '@/globals.css'
// @ts-ignore
export default function RootLayout ({ params, children }) {
	const base =  params.daoOwner;
	return (
		<html lang="en">
			<head ><title></title></head>
			<body>
				{ children }
			</body>
		</html>
	)
}