import React from 'react'
import {CheckOutlined  } from '@ant-design/icons';
import {DeleteOutlined} from '@ant-design/icons';
import './Todo.css'
import Item from 'antd/lib/list/Item';
function Todo({text,todos,job,setTodos}) {

    const handleDelete=()=>{
        setTodos(todos.filter(e=>e.id!==job.id))
    }

    const handleComplete=()=>{
        setTodos(todos.map(e=>{
            if(e.id===job.id){
                return {
                    ...e,
                    completed: !e.completed
                }
            }
            return e
        }))
    }

    return (
        <div className="todo">
            <li className={`todo__list-item ${job.completed?"completed":""}`}>{text}</li>
            <div className="todo__list-direction">
                <button onClick={handleComplete} className="todo__list-btn check" type=""><CheckOutlined /></button>
                <button onClick={handleDelete} className="todo__list-btn delete" type=""><DeleteOutlined /></button>
            </div>
        </div>
    )
}

export default Todo
