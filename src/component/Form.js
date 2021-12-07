import React,{useRef} from 'react'
import {PlusCircleOutlined  } from '@ant-design/icons';
import "./form.css"
function Form({setInputText,inputText, todos,setTodos}) {
    const handleInput=(e)=>{
        setInputText(e.target.value)
    }
    const eleInput = useRef()
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.random()*1000,
                text: inputText,
                completed: false,
            }
        ])

        setInputText('')
        eleInput.current.focus()
    }

    return (
        <div>
            <form className="form">
                <input ref={eleInput} onChange={handleInput} className="form__input" value={inputText}/>
                <button className="form__button" type="submit" onClick={handleSubmit}>
                    <PlusCircleOutlined style={{ fontSize: '16px', color: 'black' }}/>
                </button>
                <div className="form__selector">
                    <select name="todos" className="filter__todo">
                        <option value="all">All</option>
                        <option value="all">Completed</option>
                        <option value="all">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
