import React, { useState } from 'react'
import ItemTodo from './Item/ItemTodo'
import CreateTodo from './Create-todo/CreateTodo'


const data = [
  {
    id:'key21',
    title:'Покрытие тестами',
    isCompleted: false,
  },
  {
    id:'key212',
    title:'Тестовое задание',
    isCompleted:false,
  },
  {
    id:'key213',
    title:'Прекрасный код',
    isCompleted:false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current =  copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const deleteTodo = id => setTodos([...todos].filter(t => t.id !== id))
  
 
  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-5 text-green-400'>Todo for MindBox</h1>
      {todos.map(todo => (
        <ItemTodo 
        key={todo.id} 
        todo={todo} 
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
        />
      ))}
      <CreateTodo setTodos={setTodos}/>
    </div>
  )
}

export default Home