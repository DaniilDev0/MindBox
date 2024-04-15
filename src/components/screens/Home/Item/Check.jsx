import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

const Check = ({isCompleted}) => {
  return (
    <div
     className={cn('border-2 rounded-lg border-green-500 w-7 h-7 mr-3 flex intems-center justify-center',
     {
      'bg-green-500': isCompleted,
     }
    )}
    >
      {isCompleted &&
      <BsCheck size={22} className='text-gray-800'/>
    }
    </div>
  )
}

export default Check