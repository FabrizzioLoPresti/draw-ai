'use client'

import { Image } from '@nextui-org/react'
import ReactImage from 'next/image'
import { imagesGallery } from '@/libs/data'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <section className='py-12 space-y-4'>
      <h3 className='text-3xl font-bold text-orange-600'>Gallery of creations</h3>
      <div className='md:grid grid-cols-4 w-full gap-4'>
        {imagesGallery.map((image, index) => (
          <Image
            as={ReactImage}
            key={index}
            src={image.url}
            alt={image.alt}
            width={640}
            height={640}
            className='rounded-lg mb-4 md:mb-0'
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery