import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="border-green-500">
                <Link className="text-red-50 p-1 font-bold border-2" href="/">Home</Link>
                <Link className="text-blue-50 p-1 font-bold border-2" href="about">about</Link>
                <Link className="text-yellow-50 p-1 font-bold border-2" href="service">service</Link>
                <Link className="text-pink-50 p-1 font-bold border-2" href="student">student</Link>
                
            </nav>
        </>
    )
}
