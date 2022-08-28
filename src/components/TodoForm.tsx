import React, { useState, useRef } from "react"
import axios from "axios"

// Interface
import { Task } from './interfaces/Interfaces'

export const TodoForm = () => {
    const [input, setInput] = useState<string>()
    const selectRef: React.MutableRefObject<any> = useRef()

    // Create New Task
    const sendData = (id: string|undefined) => {
        const HTMLoptions = selectRef.current.value
        const data: Task = {
            name: input,
            categories:  HTMLoptions.toString()
        }
        axios.post('http://localhost:8000/api/tasks', {
            name: data.name,
            categories: data.categories
        })
        .then((res) => res)
        .catch((err) => console.log(err))
    }

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        window.location.reload()
    }

    return (
        <div className="todo-form-container">
            <h1>Task List</h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => formHandler(e)}>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Enter Your Task" 
                        id="tast-input" 
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <select ref={selectRef} id="select">
                        <option value="school">School</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                    </select>
                </div>

                <button onClick={() => sendData(input)} id="btn">add</button>
            </form>
        </div>
    )
}