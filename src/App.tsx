import { useEffect, useState } from 'react'
import axios from 'axios'

// Contexts
import { DataContext, useContext } from './components/contexts/DataContext'

//  Components
import { TodoForm } from './components/TodoForm'
import { TaskContainer } from './components/TaskContainer'

function App() {
  const [taskData, setTaskData] = useState<any>()

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks')
      .then((res: any) => setTaskData(res.data))
      .catch(err => console.log(err))

  }, [])

  const data = {
    taskData
  }

  return (
    <DataContext.Provider value={data}>
      <TodoForm />
      <TaskContainer />
    </DataContext.Provider>
  )
}

export default App
