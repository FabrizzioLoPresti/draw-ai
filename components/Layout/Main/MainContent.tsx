"use client";

import React from "react";
import { Image } from "@nextui-org/react";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <main className="grid grid-cols-5 grid-rows-3">
      <p className="col-start-1 col-end-3 row-start-1 row-end-4">
        Welcome to our innovative AI image generator based on <span className="text-orange-600 font-bold">Stable Diffusion</span> {' '}
        technology! We are excited to introduce you to a completely new way to
        create stunning and captivating images in a matter of minutes. Whether
        you{"'"}re a designer, artist or just someone who loves creativity, our
        generator gives you the tools to <span className="text-orange-600 font-bold">explore your imagination and bring your
        ideas to life</span>.
      </p>

      <div className="col-start-3 col-end-5 row-start-1 row-end-3 flex items-center justify-center">
        <Image
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className="m-5 w-full h-full object-cover"
        />
      </div>
      <div className="col-start-4 col-end-6 row-start-2 row-end-4 flex items-center justify-center">
        <Image
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className="m-5 w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default MainContent;
