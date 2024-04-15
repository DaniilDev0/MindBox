import React from 'react'
import cn from 'classnames'
import Check from './Check'
import { MdDeleteForever } from "react-icons/md";

const ItemTodo = ({todo, changeTodo, deleteTodo }) => {
  return (
    <div 
    className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-4 w-full'
    >
      <button className='flex items-center'
      onClick={() => changeTodo(todo.id)}
      >
      <Check isCompleted={todo.isCompleted}/>

      <span 
      className={cn({'line-through': todo.isCompleted,
      })}>
        {todo.title}
      </span>
      </button>
      <button onClick={() => deleteTodo(todo.id)}>
    <MdDeleteForever 
    size={30} 
    className='text-green-600 hover:text-red-600
    transition-colors ease-in-out duration-300'
    />
    </button>
    </div>
  )
}

export default ItemTodo