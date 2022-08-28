import { useState } from 'react'

export const TaskDetails = (props: any) => {
    const [editInput, setEditInput] = useState<boolean>(false)
    const [input, setInput] = useState<string>()

    return (
        <div key={props.id} className="item">
            <span style={{ 'display': editInput ? 'none' : 'block' }}>
                {props.name}
            </span>
            <input
                style={{ 'display': editInput ? 'block' : 'none' }}
                onChange={(e) => setInput(e.target.value)}
                id="edit-input"
                type="text"
                placeholder='Enter new task'
            />
            <div className="buttons">

                <button
                    style={{ 'display': editInput ? 'none' : 'block' }}
                    onClick={() => {
                        setEditInput((prevState: boolean) => !prevState)
                    }}
                    id="update-btn"
                >
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button
                    id="delete-btn"
                    style={{ 'display': editInput ? 'none' : 'block' }}
                    onClick={() => props.deleteData(props.id)}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>

                {/******************** When editting ********************/}


                <button
                    style={{ 'display': editInput ? 'block' : 'none' }}
                    id="update-btn"
                    onClick={() => {
                        setEditInput((prevState: boolean) => !prevState);
                        props.updateData(props.id, input);
                    }}
                >
                    <i style={{ 'fontWeight': 'bold', 'fontSize': '1rem' }} className="fa-solid fa-check"></i>
                </button>
                <button
                    onClick={() => {
                        setEditInput((prevState: boolean) => !prevState);
                    }}
                    style={{ 'display': editInput ? 'block' : 'none' }}
                    id="delete-btn"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )
}