import Image from "next/image";
import Header3 from "@/app/components/server/Header3";
import pic from "../../../public/pic.png";

//@ts-ignore
export default function AviLink () {
	return (
			<div className={"flex flex-row items-center justify-end mt-10"}>
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
