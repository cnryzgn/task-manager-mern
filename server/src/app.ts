import express, { Application, Request, Response } from 'express'
import cors from 'cors'

// Routes
import TaskRoute from './routes/TaskRoute'

const app: Application = express()
const PORT: string|number = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', TaskRoute)


app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`))