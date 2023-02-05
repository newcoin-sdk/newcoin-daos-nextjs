import Link from "next/link";

export default function Home() {
    return <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/whitelist"}>Whitelist</Link>
        <Link href={"/create"}>Create Dao</Link>
    </div>
}
