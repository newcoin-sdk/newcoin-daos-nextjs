import Link from "next/link";

export default function Home() {
    return <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/dao/dx.io"}>Dao</Link>
    </div>
}
