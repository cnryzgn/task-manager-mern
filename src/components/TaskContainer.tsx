import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

// Compoenents
import { SchoolTask } from './TaskCategories/SchoolTask'
import { HomeTask } from './TaskCategories/HomeTask'
import { WorkTask } from './TaskCategories/WorkTask'

export const TaskContainer = () => {

    // Update Data
    const updateData = (id: string|number, input: string) => {
        if (input.trim() === '') return alert('You must fill the textarea!')
        axios.put(`http://localhost:8000/api/tasks/${id}`, { newName: input })
        .then(res => res)
        .catch(err => console.log(err))
        window.location.reload()
    }

    // Delete Data
    const deleteData = (id: string|number) => {
        axios.delete(`http://localhost:8000/api/tasks/${id}`)
        .then(res => res)
        .catch(err => console.log(err))
        window.location.reload()
    }

  return (
    <div className='task-categories-container'>
        <SchoolTask 
            updateData={updateData}
            deleteData={deleteData}
        />
        <HomeTask
            updateData={updateData}
            deleteData={deleteData}
        />
        <WorkTask 
            updateData={updateData}
            deleteData={deleteData}
        />
    </div>
  )
}
