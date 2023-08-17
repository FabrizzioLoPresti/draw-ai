"use client";

import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import ChangeTheme from "./ChangeTheme";
import useScreenSize from "@/hooks/useScreenSize";

type Props = {};

const Header = (props: Props) => {
  const isSmallScreen = useScreenSize({
    breakpoint: 768,
  });

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      maxWidth="2xl"
      className="bg-transparent backdrop-blur-sm [&>header]:px-0 px-5 sm:px-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 2xl:mx-auto 2xl:px-0"
    >
      <NavbarBrand>
        <Link href="/" className="flex flex-row items-center gap-4">
          <Image src="/LogoCat.svg" width={60} height={60} alt="Logo Draw AI" />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/draw">
            Draw
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ChangeTheme />
        </NavbarItem>
        <NavbarItem className="flex">
          <Link href="/login">
            <UserCircleIcon className="w-10 h-10 text-black" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
