"use client";

import { Image } from "@nextui-org/react";
import ReactImage from "next/image";

type Props = {};

const Draw2ImageContent = (props: Props) => {
  return (
    <>
      <h2 className="text-4xl text-orange-600 font-bold">Draw to Image</h2>
      <p>
        Have you ever felt that your{" "}
        <span className="text-orange-600 font-bold">
          hand drawings could come to life as stunning digital images
        </span>
        ? Now you can make it happen! Our innovative AI image generation
        platform based on the Stable Diffusion technique allows you to take your
        drawings to a whole new level.
      </p>

      <p>
        Here{"'"}s how it works:{" "}
        <span className="text-orange-600 font-bold">
          simply upload an image of your hand drawing
        </span>
        . It can be a sketch, a detailed illustration or any kind of drawing you
        {"'"}ve created.{" "}
        <span className="text-orange-600 font-bold">
          Then our artificial intelligence technology kicks in
        </span>
        .
      </p>

      <p>
        Imagine{" "}
        <span className="text-orange-600 font-bold">
          taking a simple sketch and turning it into a stunning digital
          illustration
        </span>
        . Or bringing your hand-drawn characters to life in a whole new visual
        environment. Our platform allows you to{" "}
        <span className="text-orange-600 font-bold">
          experiment with different styles and effects, all while maintaining
          the unique essence of your original creations
        </span>
        .
      </p>
    </>
  );
};

export default Draw2ImageContent;
