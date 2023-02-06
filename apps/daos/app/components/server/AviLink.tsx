import Image from "next/image";
import Header3 from "@/app/components/server/Header3";
import pic from "../../../public/pic.png";

//@ts-ignore
export default function AviLink () {
	return (
			<div className={"flex flex-row justify-end items-center mt-10"}>
				<Image
					className={"rounded-full mr-5"}
					src={pic}
					alt={"avatar"}
					width={80}
					height={100}
				/>
				<Header3>{"test user"}</Header3>
			</div>
	);
}
