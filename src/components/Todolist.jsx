import React from 'react'
import Todo from './Todo'

const Todolist = ({tasks,del,com}) => {
  return (
    <div>
        {
        tasks.map((el,i)=><Todo task={el} key={i} del={del} com={com}/>)
        }
    </div>
  )
}

export default Todolist