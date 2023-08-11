"use client";

import React from "react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <main className="md:grid grid-cols-5 grid-rows-3 bg-gray-800 py-10">
      <div className="col-start-1 col-end-3 row-start-1 row-end-4 space-y-6">
        <p>
          Welcome to our innovative AI image generator based on{" "}
          <span className="text-orange-600 font-bold">Stable Diffusion</span>{" "}
          technology! We are excited to introduce you to a completely new way to
          create stunning and captivating images in a matter of minutes. Whether
          you{"'"}re a designer, artist or just someone who loves creativity,
          our generator gives you the tools to{" "}
          <span className="text-orange-600 font-bold">
            explore your imagination and bring your ideas to life
          </span>
          .
        </p>
        <div>
          <h3 className="font-bold text-lg text-orange-600">
            Call to Action (CTA):
          </h3>
          <p>
            Explore the magic of image generation with AI and{" "}
            <span className="text-orange-600 font-bold">
              start your creative journey today!
            </span>
          </p>
        </div>

        <Link href="/draw" className="button">
          Start Drawing
        </Link>
      </div>

      <div className="col-start-3 col-end-5 row-start-1 row-end-3 flex items-center justify-center">
        <div className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg"> {/* Overflow-hidden */}
          <div className="transition-transform duration-500 group-hover:scale-125 rounded-lg">
            <Image
              as={NextImage}
              isBlurred
              width={240}
              height={240}
              src="https://res.cloudinary.com/dqaun4x76/image/upload/v1691758869/bee_kgejjp.jpg"
              alt="NextUI Album Cover"
              className="m-5 rounded-lg w-full h-full object-cover filter brightness-100 group-hover:brightness-50 transition-all duration-500"
            />
          </div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-end px-9 pb-3 text-center transition-all duration-500 group-hover:translate-y-0">
            <p className="font-dmserif text-base font-light text-white">
              Bee
            </p>
          </div>
        </div>
      </div>

      <div className="col-start-4 col-end-6 row-start-2 row-end-4 flex items-center justify-center">
        <Image
          as={NextImage}
          isBlurred
          width={240}
          height={240}
          src="https://res.cloudinary.com/dqaun4x76/image/upload/v1691758865/glow_jellyfish_x19lvs.jpg"
          alt="NextUI Album Cover"
          className="m-5 w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default MainContent;
