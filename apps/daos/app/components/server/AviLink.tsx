import Image from "next/image";
import Header3 from "@/app/components/server/Header3";
import pic from "../../../public/pic.png";
import Header1r from "@/app/components/server/Header1r";

export function AviLinkSmall () {
	return (
		<div className={"flex flex-row items-center"}>
				<Image
					className={"rounded-full mr-5 w-12 h-12"}
					src={pic}
					alt={"avatar"}
					priority={true}
				/>
				<Header3>{"test user"}</Header3>
			</div>
	);
}

//@ts-ignore
export function AviLinkLarge({ children }) {
	return (
		<div className={"flex flex-row items-center justify-end mt"}>
			<Image
				className={"rounded-full mr-10"}
				src={pic}
				alt={"avatar"}
				priority={true}
				width={"1rem"}
				height={"1rem"}
			/>
			<Header1r>{ children }</Header1r>
		</div>
	);
}
