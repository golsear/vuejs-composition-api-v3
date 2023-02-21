import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { today, thisWeek, thisMonth, Post } from "../posts"

const app = express()
app.use(cors())
app.use(bodyParser.json())

const allPosts = [today, thisWeek, thisMonth]

app.get("/posts", (req, res) => {
    res.json([today, thisWeek, thisMonth])
})

app.post<{}, {}, Post>("/posts", (req, res) => {
    res.json()
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})