import Link from "next/link";

export default function Home() {
    return <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/details"}>Dao</Link>
    </div>
}
