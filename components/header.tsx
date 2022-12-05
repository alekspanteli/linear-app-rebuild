import Link from "next/link";
import Container from "./container";
import { Logo } from "./icons/logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08">
      <Container className="flex h-[var(--navigation-height)]">
        <Link href="/" className="flex gap-2 items-center text-md">
          <Logo className="h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <nav className="h-full">
          <ul className="flex items-center gap-6 h-full [&_a]:text-sm">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center gap-6">
          <Link className="text-sm" href="#">
            Log in
          </Link>
          <Link className="text-sm" href="#">
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  )
}
