import type { Metadata } from 'next'
import DrawOptionsCard from '@/components/Draw/DrawOptionsCard'

type Props = {}

export const metadata: Metadata = {
  title: `Draw with AI ${String.fromCodePoint(0x1f4bb)} | Drawing`,
}

const Page = (props: Props) => {
  return (
    <div className='md:grid md:grid-cols-4 md:gap-6 space-y-10 md:space-y-0'>
      <div className='md:col-span-1'>
        <DrawOptionsCard />
      </div>
      <section className='md:col-span-3'>
        <h2 className='text-4xl font-bold'>
          Discover
        </h2>
      </section>
    </div>
  )
}

export default Page