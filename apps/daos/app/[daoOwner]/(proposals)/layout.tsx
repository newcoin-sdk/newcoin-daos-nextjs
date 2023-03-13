import { PowerUpBtn, StakeBtn } from "@/common/components/Buttons";
import WrappedLink from "@/common/components/WrappedLink";
import Image from "next/image";
import pic from "@/public/pic.png";


// @ts-ignore
export default async function DaoLayout ({ params, children }) {
	const daoOwner = params.daoOwner;
	const base =  daoOwner;
	return (
		<html lang="en">
		<head ><title></title></head>
		<body>
			<div className={"flex flex-row justify-between items-center mt-[175px]"}>
				<div className={"flex flex-row items-center"}>
					<Image
						className={"rounded-full mr-10 w-[150px] h-[150px]"}
						src={pic}
						alt={"avatar"}
						priority={true}
					/>
					<div className={"flex flex-col"}>
						<h1 className={"text-4xl"}>{daoOwner} DAO</h1>
						<p className={"font-light text-2xl"}>testing dao functionality</p>
						<p className={"font-light text-sm"}>3157 $DXDXIO Staked</p>
					</div>
				</div>
				<PowerUpBtn link={ base + "/create"}>New Proposal</PowerUpBtn>
			</div>
			<div className={"flex flex-row items-center justify-between mt-20"}>
				<StakeBtn link={ base + "/create/standard"} >Get DXDXIO</StakeBtn>
				<WrappedLink to={ base + "/standard"}>Standard</WrappedLink>
				<WrappedLink to={ base + "/stake"}>Stake</WrappedLink>
				<WrappedLink to={ base + "/addMember"}>Add Member</WrappedLink>
				<WrappedLink to={ base + "/removeMember"}>Remove Member</WrappedLink>
				<WrappedLink to={ base + "/members"}>Members</WrappedLink>
			</div>
			{ children }
		</body>
		</html>
	)
}
