import React, { useState } from 'react';
 
const CreateTodo = ({ setTodos }) => {
const[title, setTitle] = useState('')


const addTodo = title => {
  setTodos(prev => [
    {
      id:new Date(),
      title,
      isCompleted: false,
    },
    ...prev, 
])
  setTitle('')
}

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 px-4 py-2 w-full mt-20'>
      <input 
      type="text" 
      onChange={e => setTitle(e.target.value)}
      value={title}
      onKeyDown={e => e.key === 'Enter' && addTodo(title)}
      className='bg-transparent w-full border-none outline-none'
      placeholder='What needs to be done?'
      />
    </div>
  );
}

export default CreateTodo;

