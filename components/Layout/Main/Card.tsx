import Image from 'next/image'
import { ICard } from '@/interfaces/Card'

type Props = {
  card: ICard
}

const Card = ({card}: Props) => {
  const {icon, title, description} = card

  return (
    <div className='flex flex-col items-center  border border-gray-300 rounded-3xl py-8 px-2 shadow-sm hover:bg-gray-100 hover:shadow-xl transition-all duration-300 cursor-default'>
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-sm font-light text-center'>{description}</p>
    </div>
  )
}

export default Card