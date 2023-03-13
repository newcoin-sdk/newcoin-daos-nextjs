import Link from "next/link";

// @ts-ignore
export function CustomButton ({ children }) {
	return <button className={"px-5 py-1"}>{ children }</button>
}

// @ts-ignore
export function PowerUpBtn ({ link, children }) {
	return <Link href={`${ link }`} className={"font-bold border border-solid rounded-lg cursor-pointer flex flex-row items-center justify-center border-green text-green p-5"}>{ children }</Link>
}

// @ts-ignore
export function StakeBtn ({ link, children }) {
	return <Link href={`${ link }`} className={"font-bold border border-solid rounded-lg cursor-pointer flex flex-row items-center justify-center p-5"}>{ children }</Link>
}