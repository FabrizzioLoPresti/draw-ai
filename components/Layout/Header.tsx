"use client";

import Link from "next/link";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import ChangeTheme from "./ChangeTheme";
import useScreenSize from "@/hooks/useScreenSize";

type Props = {};

const Header = (props: Props) => {
  const isSmallScreen = useScreenSize({
    breakpoint: 768,
  });

  return (
    <header className="w-full sticky top-0 z-10 bg-gray-200/20 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-between py-5 px-5 xl:px-0">
        <Link href='/' className="flex flex-row items-center gap-4">
          <Image src="/LogoCat.svg" width={60} height={60} alt="Logo Draw AI" />
        </Link>

        {!isSmallScreen && <Link href="/draw">Draw</Link>}

        <nav className="flex flex-row items-center gap-4">
          {/* <ChangeTheme /> */}
          <Link href="/login">
            <UserCircleIcon className="w-10 h-10" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;