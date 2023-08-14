'use client'

import { Image } from "@nextui-org/react";
import ReactImage from "next/image";

type Props = {};

const Text2ImageContent = (props: Props) => {
  return (
    <section>
      <h2 className="text-4xl text-orange-600 font-bold">Text to Image</h2>
      <div className="flex flex-row items-center">
        <div className="space-y-4">
          <p>
            Have you ever imagined being able to turn your ideas and concepts
            into visual images with just a few words? With our powerful AI image
            generation technology based on Stable Diffusion, it{"'"}s now
            possible. Our innovative platform{" "}
            <span className="text-orange-600 font-bold">
              allows you to take text descriptions and transform them into
              realistic and captivating images
            </span>{" "}
            that capture the essence of your words.
          </p>

          <p>
            The result? An image that goes beyond your words,{" "}
            <span className="text-orange-600 font-bold">
              an image that allows you to share your ideas and visions
            </span>{" "}
            in a whole new way. Whether you
            {"'"}
            re looking for inspiration, creating art or simply exploring
            creative possibilities, our platform is here to help you bring your
            concepts to life.
          </p>

          <p>
            Text-to-image generation{" "}
            <span className="text-orange-600 font-bold">
              opens up a world of unlimited possibilities for creativity
            </span>
            . You are no longer limited by your drawing or design skills.
            Instead, you can express your ideas fluidly and visually, regardless
            of your level of experience.
          </p>
        </div>

        <Image
          as={ReactImage}
          isBlurred
          width={800}
          height={600}
          src="https://res.cloudinary.com/dqaun4x76/image/upload/v1692023467/text2image_mbz25i.gif"
          alt="Textt to Image"
          className="rounded-lg w-full h-full object-cover m-5"
        />
      </div>
    </section>
  );
};

export default Text2ImageContent;
