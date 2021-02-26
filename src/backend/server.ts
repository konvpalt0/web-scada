import {Response, Request} from 'express'
import {IDictionary, ObjectPlaceHolder} from "./IDictionaryType";

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
app.get('/test',(req:Request,res:Response) => {
    res.sendFile('someHtml.html',{root: './src/backend/'});
})

app.get('/api/removeSensors',(req: Request, res:Response) => {
    if(req.query.objectID === undefined) {
        res.json({
            error: {
                message: 'objectID is required get parameter of this query'
            }
        })
    } else {
        db.any(`delete from sensors where owner = ${req.query.objectID}`).then( (result:JSON) => {
            res.json({
                response: {
                    message: 'delete success'
                }
            })
        }).catch((err:String) => {
            console.log(err)
        })
    }
    }

)

app.post('/api/setSensors',(req: Request, res:Response) => {
    console.log(req.body);
    if(req.body.hasOwnProperty('sensors') && req.body.hasOwnProperty('objectID')) {
        if(!Object.keys(req.body.sensors).length) {
            res.json({
                error: {
                    message: 'Sensors must not be empty'
                }
            })
        } else {
            req.body.sensors.forEach((sensor: {objectID: Number, name: String, measure: String, position: String, min: Number, max: Number}) => {
                console.log(sensor);
                db.any(`insert into Sensors(owner, name, measure, position, min, max) values(${req.body.objectID},'${sensor.name}','${sensor.measure}','${sensor.position}',${sensor.min},${sensor.max})`).then( (result:JSON) => {
                    console.log("insert success")
                }).catch((err:String) => {
                    console.log(err)
                })

            })
            res.sendStatus(200)
        }
    } else {
        res.json({
            error : {
                message : "Object id or sensors is invalid"
            }
        })
    }
})

let objectModels = {} as ObjectPlaceHolder
app.get('/api/startObject', (req: Request, res: Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            error: {
                message: 'objectID is required get parameter of this query'
            }
        });
        return;
    }
    if(objectModels[Number(req.query.objectID)] !== undefined) {
        res.json({
            response: {
                message: 'Object with this ID is already started'
            }
        })
        return
    }
    db.any(`select * from sensors where owner = ${req.query.objectID}`).then((sensors :Array<{objectID: Number, name: String, measure: String, position: String, min: Number, max: Number}>) => {
        if(!sensors.length) {res.json({response : {
                message: 'This object does not have any sensors'
            }})
            return
        }
        if(objectModels[Number(req.query.objectID)] === undefined) {
            objectModels[Number(req.query.objectID)] = {} as IDictionary
        }
        const functions:Array<Function> = []
        const objectStart = (sensorsFunctions: Array<Function>) => {
            setInterval(() => {
                sensorsFunctions.forEach(func => {
                    func()
                })
                console.log(objectModels);
            },1000)
        }
        sensors.forEach(sensor => {
            const sensorChangeFunction = () => {
                if(objectModels[Number(req.query.objectID)][`${sensor.name}_${sensor.position}`] === undefined) objectModels[Number(req.query.objectID)][`${sensor.name}_${sensor.position}`] = sensor.min
                let sensorMin = sensor.min;
                let sensorMax = sensor.max;
                let sensorCurrent = objectModels[Number(req.query.objectID)][`${sensor.name}_${sensor.position}`];
                // console.log(sensorCurrent)
                // console.log(objectModel)
                let diff = ((sensorMax as number) - (sensorMin as number)) / 30

                if(Number(sensorCurrent.toFixed(2)) < Number(sensorMax.toFixed(2))) {
                    sensorCurrent = sensorCurrent as number + diff;
                    objectModels[Number(req.query.objectID)][`${sensor.name}_${sensor.position}`] = Number(sensorCurrent.toFixed(2))
                } else {

                    console.log(`${sensorCurrent}, ${sensor.max}, ${sensorMax}`)
                    sensorCurrent = sensorCurrent as number - diff;
                    objectModels[Number(req.query.objectID)][`${sensor.name}_${sensor.position}`] = Number(sensorCurrent.toFixed(2))
                }
            }
            functions.push(sensorChangeFunction)
        })
        objectStart(functions)
        res.json({
            response : {
                message : 'Object started!'
            }
        })
    }).catch((err:String) => {
        new Error(err.toString());
    })
})

app.get('/api/stopObject', (req: Request, res:Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            error: {
                message: 'objectID is required get parameter of this query'
            }
        });
        return;
    }


})

app.listen(port, () => {
    console.log(`app is listening port ${port}`)
})




export {app}
