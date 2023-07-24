import { useState } from "react"

type Props = {}

const ChangeTheme = (props: Props) => {
  const [theme, setTheme] = useState('light')
  
  return (
    <div className='flex w-12 h-6 bg-gray-700 rounded-full'>
      <span className='h-6 w-6 bg-white rounded-full'></span>
    </div>
  )
}

export default ChangeTheme