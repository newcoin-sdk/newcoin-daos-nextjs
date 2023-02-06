import Link from "next/link";

export default function Home() {
    return <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/dao/0"}>Dao</Link>
    </div>
}
