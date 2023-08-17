"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./Card";
import { cards } from "@/libs/data";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["drawing", "idea", "creativity", "imagination"],
    loop: true,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="h-screen flex flex-col items-center justify-center max-w-5xl mx-auto px-5 md:px-0 gap-16">
      <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center leading-relaxed">
        AI Image Generator that lets you draw and then uses AI to{" "}
        <span className="text-orange-600">generate</span> a new image based on
        your {' '}
        <span className="text-orange-600 font-bold inliene-block md:inline">{text} <Cursor cursorColor="#f75d0a"/></span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
