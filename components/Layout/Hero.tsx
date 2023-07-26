import Card from "./Card"
import { ICard } from "@/interfaces/Card"

type Props = {}

const cards: ICard[] = [
  {
    icon: "/Icons/search.svg",
    title: "Discover",
    description: "the power of AI generated images"
  },
  {
    icon: "/Icons/draw.svg",
    title: "Draw",
    description: "your own image"
  },
  {
    icon: "/Icons/generate.svg",
    title: "Generate",
    description: "images based on your drawing"
  },
  {
    icon: "/Icons/share.svg",
    title: "Share",
    description: "your drawing with the world"
  }
]

const Hero = (props: Props) => {
  return (
    <section className='h-screen flex flex-col items-center justify-center max-w-5xl mx-auto px-5 md:px-0 gap-16'>
      <h1 className='text-4xl lg:text-7xl font-bold text-center'>
        AI Image Generator that lets you draw and then uses AI to <span className='text-blue-600'>generate</span> a new image based on your <span className='text-blue-600'>drawing</span>.
      </h1>
      <div className='grid grid-cols-4 gap-12'>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  )
}

export default Hero