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
        <Link href="/" className="flex items-center gap-2 text-md">
          <Logo className="h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <div
          className={classNames(
            "transtion-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-auto md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100",
              hamburgerMenuIsOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-8 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-grey",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0")}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
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
        </div>

        <div className="ml-auto flex h-full items-center gap-6">
          <Link className="text-sm" href="#">
            Log in
          </Link>
          <Button href="#">Sign Up</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHambugerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}
