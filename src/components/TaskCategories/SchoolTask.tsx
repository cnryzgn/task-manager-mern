import { useEffect, useState } from "react"

// Context
import { DataContext, useContext } from "../contexts/DataContext"

// Components
import { TaskDetails } from "./TaskDetails"

export const SchoolTask = (props: any) => {
    const { taskData } = useContext(DataContext)
    const [editInput, setEditInput] = useState<boolean>(false)
    const [input, setInput] = useState<string>()

    return (
        <div className="task-container">
            <h1>School Tasks</h1>
            <div className="task-list">
                {taskData !== undefined && taskData.map((task: any) => (
                    task.categories === 'school' &&
                    <TaskDetails
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        sendData={props.sendData}
                        updateData={props.updateData}
                        deleteData={props.deleteData}
                    />
                ))}

            </div>
        </div>
    )
}