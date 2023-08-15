import React from 'react'

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <section className='py-12'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Subscribe to our newsletter
        </h2>
        <p className='text-center mb-8'>
          Get notified when we launch new features or update existing ones.
        </p>
        <form className='flex flex-col sm:flex-row gap-4 w-full'>
          <input
            type='email'
            placeholder='Your email address'
            className='w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <button
            type='submit'
            className='button'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter