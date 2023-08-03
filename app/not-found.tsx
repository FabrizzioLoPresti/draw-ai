import Image from "next/image"
import RootLayout from "./layout"

type Props = {}

const Page = (props: Props) => {
  return (
    <RootLayout>
      <div className='h-screen max-w-7xl mx-auto py-5 px-5 xl:px-0 flex flex-col md:flex-row items-center justify-center gap-16'>
        <Image src='/LogoCat.svg' width={300} height={300} alt='Logo Draw AI' />
        <div className="text-center">
          <h3 className='text-4xl font-bold'>404 Not Found</h3>
          <p className='text-2xl'>The page you are looking for does not exist.</p>
        </div>
      </div>
    </RootLayout>
  )
}

export default Page