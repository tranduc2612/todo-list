import React from 'react'
import Todo from './Todo'
import './List.css'
function List({todos,setTodos}) {
    return (
        <div className="list__container">
            <ul className="todo__list">
                {todos.map((job)=>{
                    return <Todo 
                    key={job.id} 
                    text={job.text}
                    todos={todos} 
                    job={job}
                    setTodos={setTodos}
                    />
                })}
            </ul>
        </div>
    )
}

export default List
