import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo.png';
import { ModeToggle } from "./mode-toggle";
export function Header() {
    return (
        <header className="flex items-center justify-between md:px-20 py-10 px-4">
            <Link href="/" className="flex items-center gap-1">
                <Image src={Logo} alt="logo" width={30} height={30} />
                <h1 className="text-xl font-bold">
                    WebPrice
                    <span className="text-red-500">Tracker</span>
                </h1>
            </Link>
            <ModeToggle />
        </header>
    )
}