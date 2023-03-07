
import Link from 'next/link';
import React from "react";

// allow this component to accept all properties of "a" tag
interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	// we can add more properties we need from next/link in the future
}

// Forward Refs, is useful
// eslint-disable-next-line react/display-name
export default React.forwardRef(({ to, children }: IProps, ref: any) => {
	return (
		<Link className={"text-2xl opacity-50 cursor-pointer"}
			href={to}
			ref={ref}
		> {children}
		</Link>
	);
});