import {Response, Request} from 'express'

const app = require('express')()
const pgp = require('pg-promise')
let db = pgp('postgres://username:password@host:port/database')

const port = 3001
app.get('/api', function(req: Request, res: Response){
    res.json([
        {
            id: 1, username: "somebody"
        },
        {
            id: 2, username: "somebodyelse"
        }
    ])
})

app.listen(port, () => {
    console.log(`app is listening port ${port}`)
})

export {}