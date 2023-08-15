"use client";

import { Image } from "@nextui-org/react";
import ReactImage from "next/image";

type Props = {
  children: React.ReactNode;
  urlIMagen: string;
  alt: string;
  isReversed?: boolean;
};

const ContentContainer = ({ children, urlIMagen, alt, isReversed }: Props) => {
  return (
    <section className={`py-12 md:flex md:items-center gap-12 justify-between ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="space-y-4 max-w-2xl">
        {children}
      </div>
      <Image
        as={ReactImage}
        isBlurred
        width={800}
        height={600}
        src={urlIMagen}
        alt={alt}
        className="rounded-lg max-w-fit max-h-fit md:w-full md:h-full object-cover m-5 mx-auto"
      />
    </section>
  );
};

export default ContentContainer;
