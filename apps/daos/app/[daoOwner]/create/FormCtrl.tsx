import StandardForm from "@/app/[daoOwner]/(proposals)/standard/StandardForm";

export type FormCtrlProps = {
	proposalType: string,
	daoOwner: string,
	proposer: string,
	setProposalCreated: (value: boolean) => void,
	setTx: (value: string) => void,
}

export function FormCtrl({
	proposalType,
	daoOwner,
	proposer,
	setProposalCreated,
	setTx
}: FormCtrlProps
) {
	if ( proposalType === "standard" ) return (
		<StandardForm
			daoOwner={daoOwner}
			setProposalCreated={setProposalCreated}
			setTx={setTx}
			proposer={proposer}
		/>
	);
	else return <></>;
}
