import express, { Router, Request, Response } from 'express'
import { connection } from '../config/db'

connection.connect()
const route: Router = express.Router()

// === READ
route.get('/tasks', (req: Request, res: Response) => {
    connection.query('SELECT * FROM tasks', (err, results, fields) => {
        if (err) throw err

        res.json(results)

    })
})

// === CREATE
route.post('/tasks', (req: Request, res: Response) => {
    const requestData = {
        name: req.body.name,
        categories: req.body.categories
    }

    connection.query(
        'INSERT INTO tasks SET name = ?, categories = ?', [requestData.name, requestData.categories], (err, results ,fields) => {
        if (err) throw err
            
        console.log(`New Task Created`)
    })
})

// === UPDATE
route.put('/tasks/:id', (req: Request, res: Response) => {
    const requestData = {
        id: req.params.id,
        name: req.body.newName
    }

    connection.query(`UPDATE tasks SET name = ? WHERE id = ?`, [requestData.name, requestData.id], (err, results, fields) => {
        if (err) throw err

        console.log(`Post ID: ${requestData.id}\nPost Status: UPDATED`)
    })
})

// === DELETE
route.delete('/tasks/:id', (req: Request, res: Response) => {
    const requestID = req.params.id 
    connection.query('DELETE FROM tasks WHERE id = ?', [requestID], (err, results, fields) => {
        if (err) throw err

        console.log(`Post ID : ${requestID}\nPost Status: DELETED`)
    })
})

export default route