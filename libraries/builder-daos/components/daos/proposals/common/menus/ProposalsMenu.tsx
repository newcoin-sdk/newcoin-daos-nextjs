import {StakeBtn} from "../../../../global/Buttons";
import WrappedLink from "../../../../global/WrappedLink";
import React from "react";

export default function ProposalsMenu() {
    return (
        <div className={"flex flex-row items-center justify-between"}>
            <StakeBtn link={ "/create/standard"} >Get DXDXIO</StakeBtn>
            <WrappedLink to={ "/standard"}>Standard</WrappedLink>
            <WrappedLink to={ "/stake"}>Stake</WrappedLink>
            <WrappedLink to={ "/addMember"}>Add Member</WrappedLink>
            <WrappedLink to={ "/removeMember"}>Remove Member</WrappedLink>
            <WrappedLink to={ "/members"}>Members</WrappedLink>
        </div>
    )
}