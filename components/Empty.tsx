import React from 'react'
import Image from 'next/image';
interface EmptyProps {
    label:string;
}

const Empty = ({
    label
}:EmptyProps) => {
  return (
    <div className='h-full p-20 flex flex-col items-center justify-center'>
      <div className='relative h-72 w-72'>
        <Image alt='Empty'  src={'/Conversationall.jpg'} width={600} height={500}/>
      </div>
      <p>{label}</p>
    </div>
  )
}

export default Empty
