import {CustomButton, PowerUpBtn} from "@/app/components/client/buttons/Buttons";
import Link from "next/link";
import StandardList from "@/app/components/server/Proposals/Lists/StandardList";
import AviLinkLarge from "@/app/components/server/AviLinkLarge";

export type VoteObject = {
	quantity: string;
	contract: string;
};

export type StandardProposal = {
	id: number;
	title: string;
	summary: string;
	proposer: string;
	vote_start: Date;
	vote_end: Date;
	vote_yes: VoteObject;
	vote_no: VoteObject;
	pass_rate: number;
	url: string;
}

const baseUrl = 'http://localhost:3000/api';

async function getProposals( daoOwner: string, type: string ) {
	const res = await fetch(`${ baseUrl }/${ daoOwner }/${ type }`);
	if(!res.ok) throw new Error("Failed to fetch standard proposals");
	return res.json();
}

//@ts-ignore
function DaoMenuLink({ label, path }) {
	return <Link className={"text-2xl mr-20 opacity-50 cursor-pointer"} href={ path }>{ label }</Link>
}

//@ts-ignore
function CountTab({ count, type }) {
	return (
		<p className={`text-2xl mr-20 opacity-50 cursor-pointer text-lg`}>{ type }
			<span className={"text-sm bg-gray-200 rounded-full px-3 py-1 ml-5 opacity text-primary font-[800] text-center "}> { count }
			</span>
		</p>
	)
}

// @ts-ignore
export default async function DaoDetails({ params }) {
	const standardProposals = await getProposals( params.daoOwner, "standard" );
	return (
		<div className={"flex flex-col"}>
			<div className={"flex flex-row justify-between items-center"}>
				<AviLinkLarge>
					<h1 className={"text-4xl"}>{params.daoOwner} DAO</h1>
					<p className={"font-light text-2xl"}>testing dao functionality</p>
					<p className={"font-light text-sm"}>3157 $DXDXIO Staked</p>
				</AviLinkLarge>
				<PowerUpBtn>New Proposal</PowerUpBtn>
			</div>
			<div className={"flex flex-row items-center p-10 pl-20"}>
				<DaoMenuLink label={"Members"} path={"dx.io/members"}/>
				<DaoMenuLink label={"Proposals"} path={"dx.io/standard"}/>
				<CountTab count={2} type={"Active"}/>
				<CountTab count={5} type={"Expired"}/>
				<CountTab count={8} type={"Approved"}/>
				<CustomButton>Get $DXDXIO</CustomButton>
			</div>
			<StandardList proposals={standardProposals.rows}/>
		</div>
	);
}