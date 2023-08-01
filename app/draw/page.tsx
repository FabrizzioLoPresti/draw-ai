import type { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: `Draw with AI ${String.fromCodePoint(0x1f4bb)} | Drawing`,
}

const Page = (props: Props) => {
  return (
    <div className='max-w-7xl mx-auto py-5 px-5 xl:px-0 grid grid-cols-4'>
      <div className='col-span-1'>
        <h1 className='text-4xl font-bold'>Draw</h1>
      </div>
      <div className='col-span-3'>
        <h1 className='text-4xl font-bold'>Draw</h1>
      </div>
    </div>
  )
}

export default Page