import Image from "next/image";
import pic from "../../../public/pic.png";

//@ts-ignore
export default function AviLinkLarge ({ children }) {
	return (
			<div className={"flex flex-row items-center justify-end mt-10"}>
				<Image
					className={"rounded-full mr-5 w-40 h-40"}
					src={pic}
					alt={"avatar"}
					priority={true}
				/>
				<div className={"flex flex-col"}>{children}</div>
			</div>
	);
}
