import RootLayout from "./layout"

type Props = {}

const Page = (props: Props) => {
  return (
    <RootLayout>
      <div className='max-w-7xl mx-auto py-5 px-5 xl:px-0'>
        <h1 className='text-4xl font-bold'>404</h1>
      </div>
    </RootLayout>
  )
}

export default Page