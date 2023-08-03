import type { Metadata } from 'next'
import DrawOptionsCard from '@/components/Draw/DrawOptionsCard'

type Props = {}

export const metadata: Metadata = {
  title: `Draw with AI ${String.fromCodePoint(0x1f4bb)} | Drawing`,
}

const Page = (props: Props) => {
  return (
    <div className='grid grid-cols-4 gap-6'>
      <div className='col-span-1'>
        <DrawOptionsCard />
      </div>
      <div className='col-span-3'>
        <h2 className='text-4xl font-bold'>
          Discover
        </h2>
      </div>
    </div>
  )
}

export default Page