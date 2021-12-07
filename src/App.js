import React,{useState} from 'react'
import './App.css';
import Form from './component/Form';
import List from './component/List';
function App() {
    const [inputText,setInputText] = useState('')
    const [todos,setTodos] = useState([])


    return (
        <div className="app">
            <header>Todo List</header>
            <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default App

