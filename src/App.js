import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './component/Form';
import List from './component/List';
function App() {
    const [inputText,setInputText] = useState('')
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState('all')
    const [filterTodo,setFilterTodo] = useState([])

    useEffect(()=>{
        handleFilter()
    },[todos,status])

    const handleFilter=()=>{
        switch (status){
            case 'completed':
                setFilterTodo(todos.filter(e=>e.completed === true))
                break;
            case 'uncompleted':
                setFilterTodo(todos.filter(e=>e.completed === false))
                break;
            default:
                setFilterTodo(todos)
                break;    
        }
    }

    

    return (
        <div className="app">
            <header>Todo List</header>
            <Form 
                inputText={inputText} 
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <List 
                todos={todos} 
                setTodos={setTodos}
                filterTodo={filterTodo}
            />
        </div>
    )
}

export default App

