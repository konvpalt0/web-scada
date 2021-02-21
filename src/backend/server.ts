import {Response, Request} from 'express'

const app = require('express')()
const pgp = require('pg-promise')({})

var cn = {
    host: 'localhost', // 'localhost' is the default
    port: 5432, // 5432 is the default;
    database: 'webscada',
    user: 'operator',
    password: 'operator'
};
const db = pgp(cn)

const port = 3001

app.get('/api', function(req: Request, res: Response){
    let result = db.any('SELECT * from Users').then((value: JSON) => {
        console.log()
    })
    console.log(result);
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