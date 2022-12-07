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
        <nav
          className={classNames(
            "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background md:relative md:top-auto md:block md:h-auto md:w-auto md:bg-transparent",
            hamburgerMenuIsOpen ? "" : "hidden"
          )}
        >
          <ul
            className={classNames(
              "ml-8 flex flex-col md:flex-row md:items-center",
              "h-full md:gap-6 [&_a]:text-md [&_a]:transition-colors md:[&_a]:text-sm [&_a:hover]:text-grey",
              "[&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_li]:border-b [&_li]:border-grey-dark [&_li]:md:border-none"
            )}
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

        <div className="ml-auto flex h-full items-center gap-6">
          <Link className="text-sm" href="#">
            Log in
          </Link>
          <Button href="#">Sign Up</Button>
        </div>

        <button
          className="ml-6"
          onClick={() => setHambugerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}
