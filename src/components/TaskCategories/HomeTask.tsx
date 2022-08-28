import { useState } from "react"

// Context
import { DataContext, useContext } from "../contexts/DataContext"

// Components
import { TaskDetails } from "./TaskDetails"

export const HomeTask = (props: any) => {
    const { taskData } = useContext(DataContext)


    return (
        <div className="task-container">
            <h1>Home Tasks</h1>
            <div className="task-list">
                {taskData !== undefined && taskData.map((task: any) => (
                    task.categories === 'home' &&
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