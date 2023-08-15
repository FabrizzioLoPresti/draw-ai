"use client";

import { Image } from "@nextui-org/react";
import ReactImage from "next/image";

type Props = {};

const Image2ImageContent = (props: Props) => {
  return (
    <>
      <h2 className="text-4xl text-orange-600 font-bold">Image to Image</h2>
      <p>
        Imagine having the ability to transform one image into a completely
        different one with just a few clicks. With our Stable Diffusion-based AI
        imaging technology, you can do just that. Introducing a revolutionary
        experience that{" "}
        <span className="text-orange-600 font-bold">
          allows you to take your photos and turn them into true works of visual
          art
        </span>
        .
      </p>

      <p>
        Here{"'"}s how it works:{" "}
        <span className="text-orange-600 font-bold">
          start by selecting a base image
        </span>
        . It can be anything from a personal photograph to a reference image you
        want to transform. Then{" "}
        <span className="text-orange-600 font-bold">
          choose a style that inspires you and a reference prompt
        </span>
        . It can be a famous work of art, a stunning photograph or even a unique
        illustration.
      </p>

      <p>
        Imagine turning a photo from your last trip into a work of art inspired
        by impressionism, or giving an image of your pet a touch of surrealism.{" "}
        <span className="text-orange-600 font-bold">
          The possibilities are endless and only limited by your imagination
        </span>
        .
      </p>
    </>
  );
};

export default Image2ImageContent;
