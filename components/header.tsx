"use client";

import Link from "next/link";
import Container from "./container";
import { Logo } from "./icons/logo";
import Button from "./button";
import { HamburgerIcon } from "./icons/hamburger";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {

  const [hamburgerMenuIsOpen, setHambugerMenuIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex gap-2 items-center text-md">
          <Logo className="h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <nav className={classNames("h-full md:block fixed top-navigation-height", hamburgerMenuIsOpen ? '' : 'hidden')}>
          <ul className="ml-6 flex items-center gap-6 h-full [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="hidden lg:block">
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
          <Button href="#">
            Sign Up
          </Button>
        </div>

        <button className="ml-6" onClick={() => setHambugerMenuIsOpen((open) => !open)}>
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}
