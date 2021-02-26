import {Response, Request} from 'express'

const app = require('express')()
const pgp = require('pg-promise')({})
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let cn = {
    host: 'localhost', // 'localhost' is the default
    port: 5432, // 5432 is the default;
    database: 'webscada',
    user: 'operator',
    password: 'operator'
};
const db = pgp(cn)

const port = 3001

app.get('/api', (req: Request, res: Response) => {
    console.log(req.query)
    db.any('SELECT * from Users').then((value: JSON) => {
        res.json(value)
    }, (err:String) => {
        res.json({
            error: {
                message: err
            }
        })
    }).catch()
})

app.post('/api/signUp', (req: Request, res: Response) => {

})

let isStarted = false;

app.get('/api/objectConfiguration', (req: Request, res: Response) => {
    if(req.query.objectID === undefined) {
        res.json({
            error: {
                message: 'objectID is required get parameter of this query'
            }
        })
     }
    db.any(`select * from Sensors where owner = ${req.query.objectID}`).then( (result:JSON) => {
        if(!Object.keys(result).length) {
            res.json({
                response: {
                message: 'This object does not exist or does not have sensors'
                }
            })
        } else {
            res.json(result)
        }
    }).catch((err:String) => {
        console.log(err)
    })
})
app.post('/api/setSensors',(req: Request, res:Response) => {
    if(req.body.hasOwnProperty('sensors') && req.body.hasOwnProperty('objectID')) {
        if(!Object.keys(req.body.sensors).length) {
            res.json({
                error: {
                    message: 'Sensors must not be empty'
                }
            })
        } else {
            Object.keys(req.body.sensors).forEach(key => {
                db.any(`insert into sensors(owner, name, measure, position, min, max) values(${req.body.objectID},${req.body[key].name},${req.body[key].measure},${req.body[key].position},${req.body[key].min},${req.body[key].max})`).then( (result:JSON) => {
                    console.log("insert success")
                }).catch((err:String) => {
                    console.log(err)
                })

            })
        }
    } else {
        res.json({
            error : {
                message : "Object id or sensors is invalid"
            }
        })
    }
})
app.get('/api/startObject', (req: Request, res: Response) => {
    let value = 0.05
    let endValue = 0.8
    let diff = 0.05
    if (!isStarted)  {
        setInterval(() => {
            console.log(1);
            if(value >= endValue) diff = -0.05
            if(value <= 0.05) diff = 0.05
            value += diff
            db.any(`insert into Readings(sensor,value) values (1,${value})`).then((it:String) => {
                    console.log(it)
                }
            ).catch((it: String) => {
                console.log(it)
            } )
        }, 1000)
        res.json({
            response : {
                message: 'Object started'
            }
        })
    } else {
        res.json({
            response : {
                message: 'Object is already started'
            }
        })
    }
    isStarted = true
})

app.listen(port, () => {
    console.log(`app is listening port ${port}`)
})




export {app}
