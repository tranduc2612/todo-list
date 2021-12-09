import React from 'react'
import Todo from './Todo'
import './List.css'
function List({todos,setTodos,filterTodo}) {
    return (
        <div className="list__container">
            <ul className="todo__list">
                {filterTodo.map((job,index)=>{
                    return <Todo 
                        key={index} 
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
