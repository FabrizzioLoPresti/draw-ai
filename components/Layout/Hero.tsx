import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-screen flex items-center justify-center max-w-7xl mx-auto px-5 md:px-0'>
      <h1 className='text-4xl lg:text-7xl font-bold text-center'>
        AI Image Generator that lets you draw and then uses AI to <span className='text-blue-600'>generate</span> a new image based on your <span className='text-blue-600'>drawing</span>.
      </h1>
    </div>
  )
}

export default Hero