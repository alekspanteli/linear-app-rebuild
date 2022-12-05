import Link from "next/link";
import Container from "./container";
import { Logo } from "./icons/logo";



export default function Header() {
    return (
        <header>
            <Container>
                <Link href="/" className="flex gap-2 items-center"><Logo className="h-[1.8rem] w-[1.8rem]" /> Linear</Link>
            </Container>
        </header>
    )
}