"use client";

import Link from "next/link";
import { PaintBrushIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import ChangeTheme from "./ChangeTheme";
import useScreenSize from "@/hooks/useScreenSize";

type Props = {};

const Header = (props: Props) => {
  const isSmallScreen = useScreenSize({
    breakpoint: 768,
  });

  return (
    <header className="w-full sticky top-0 z-10 bg-gray-200/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-5 px-5 xl:px-0">
        <div className="flex flex-row items-center gap-4">
          <PaintBrushIcon className="w-10 h-10" />
        </div>

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