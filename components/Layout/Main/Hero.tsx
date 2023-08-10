import Card from "./Card"
import { cards } from "@/libs/data"

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='h-screen flex flex-col items-center justify-center max-w-5xl mx-auto px-5 md:px-0 gap-16'>
      <h1 className='text-4xl lg:text-7xl font-bold text-center'>
        AI Image Generator that lets you draw and then uses AI to <span className='text-orange-600'>generate</span> a new image based on your <span className='text-orange-600'>drawing</span>.
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  )
}

export default Hero