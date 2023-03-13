import Image from "next/image";
import pic from "@/public/pic.png";
import { PowerUpBtn } from "@/components/global/Buttons";

// @ts-ignore
export default function DaoMenu ({ daoOwner }) {
return (
        <div className={"flex flex-row justify-between items-center"}>
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
            <PowerUpBtn link={ "/create"}>New Proposal</PowerUpBtn>
        </div>
    )
}