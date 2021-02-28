import {Response, Request} from 'express'
import {HMIPayload, IDictionary, IntervalPlaceholder, ObjectPlaceHolder} from "./IDictionaryType";

const app = require('express')()
const pgp = require('pg-promise')({})
const bodyParser = require('body-parser')

app.use(function(req:Request, res:Response, next: any) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const objectModels = {} as ObjectPlaceHolder
let intervals = {} as IntervalPlaceholder

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
            response: {
                message: err,
                code: 1
            }
        })
    }).catch()
})

app.post('/api/signUp', (req: Request, res: Response) => {

})

app.get('/api/objectConfiguration', (req: Request, res: Response) => {
    if(req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        })
     }
    db.any(`select * from Sensors where owner = ${req.query.objectID}`).then( (result:JSON) => {
        if(!Object.keys(result).length) {
            res.json({
                response: {
                message: 'This object does not exist or does not have sensors',
                code: 1
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
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        })
    } else {
        db.any(`delete from sensors where owner = ${req.query.objectID}`).then( (result:JSON) => {
            res.json({
                response: {
                    message: 'delete success',
                    code: 0
                }
            })
        }).catch((err:String) => {
            console.log(err)
        })
    }
    }
)

app.post('/api/setHMI',(req:Request,res:Response) => {
    console.log(req.body)
    if(!req.body.hasOwnProperty('objectID')) {
        res.json({response : {
                message: 'objectID is required parameter',
                code: 1
            }})
        return
    }
    if(!req.body.hasOwnProperty('hmi')) {
        res.json({response : {
            message: 'hmi is required parameter',
            code: 1
            }})
        return
    }
    db.any(`insert into hmi(owner, hmi) values(${req.body.objectID}, '${JSON.stringify(req.body.hmi)}')`).then( (result:JSON) => {
        res.json({response: {
            message:('Insert success'),
            code: 0
            }})
    }).catch((err: String) => {
        console.log(err);
    })
})
app.get('/api/removeHMI', (req:Request,res:Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        });
        return;
    }
    db.any(`delete from hmi where owner = ${req.query.objectID}`).then( (result:JSON) => {
        res.json({
            response: {
                message: 'delete success',
                code: 0
            }
        })
    }).catch((err:String) => {
        console.log(err)
    })
})

app.get('/api/getHMI',(req:Request,res:Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        });
        return;
    }
    db.any(`select hmi from HMI where owner = ${req.query.objectID}`).then((result: Array<{hmi: String}>) => {
        if(!result.length) {
            res.json({
                response: {
                    message: 'This object does not have any HMI',
                    code: 1
                }
            });
            return
        }
        let hmi = {} as HMIPayload
        console.log(result);
        result.forEach((element:{hmi: String}, index: number) => {
            hmi[index] = JSON.parse(element.hmi.toString())
        })
        res.json({
            response : {
                hmi: hmi,
                code: 0
            }
        })
    }).catch((err: String) => {
        console.log(err);
    })
})

app.post('/api/setSensors',(req: Request, res:Response) => {
    console.log(req.body);
    if(req.body.hasOwnProperty('sensors') && req.body.hasOwnProperty('objectID')) {
        if(!req.body.sensors.length) {
            res.json({response : {
                message: 'Sensors must not be empty',
                code: 1
            }})
            return
        } else {
            req.body.sensors.forEach((sensor: {objectID: Number, tag: String, measure: String, min: Number, max: Number}) => {
                console.log(sensor);
                db.any(`insert into Sensors(owner, tag, measure, min, max) values(${req.body.objectID},'${sensor.tag}','${sensor.measure}',${sensor.min},${sensor.max})`).then( (result:JSON) => {
                }).catch((err:String) => {
                    console.log(err)
                })
            })
            res.json({
                response : {
                    message: 'Insert success',
                    code: 0
                }
            })
            //res.sendStatus(200)
        }
    } else {
        res.json({
            response : {
                message : "Object id or sensors is invalid",
                code: 1
            }
        })
    }
})

app.get('/api/startObject', (req: Request, res: Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        });
        return;
    }
    if(objectModels[Number(req.query.objectID)] !== undefined) {
        res.json({
            response: {
                message: 'Object with this ID is already started',
                code: 1
            }
        })
        return
    }
    db.any(`select * from sensors where owner = ${req.query.objectID}`).then((sensors :Array<{objectID: Number, tag: String, measure: String, min: Number, max: Number}>) => {
        if(!sensors.length) {res.json({response : {
                message: 'This object does not have any sensors',
                code: 1
            }})
            return
        }
        if(objectModels[Number(req.query.objectID)] === undefined) {
            objectModels[Number(req.query.objectID)] = {} as IDictionary
        }
        const functions:Array<Function> = []
        const objectStart = (sensorsFunctions: Array<Function>) => {
            intervals[Number(req.query.objectID)] = setInterval(() => {
                sensorsFunctions.forEach(func => {
                    func()
                })
                console.log(objectModels);
            },1000)
        }
        sensors.forEach(sensor => {
            const sensorChangeFunction = () => {
                if(objectModels[Number(req.query.objectID)][`${sensor.tag}`] === undefined) objectModels[Number(req.query.objectID)][`${sensor.tag}`] = sensor.min
                let sensorMin = sensor.min;
                let sensorCurrent = objectModels[Number(req.query.objectID)][`${sensor.tag}`];
                let diff = ((sensor.max as number) - (sensorMin as number)) / 30
                let sensorMax: Number = sensor.max as number - diff;

                if(Number(sensorCurrent.toFixed(2)) < Number(sensorMax.toFixed(2))) {
                    sensorCurrent = sensorCurrent as number + diff;
                    objectModels[Number(req.query.objectID)][`${sensor.tag}`] = Number(sensorCurrent.toFixed(2))
                } else {
                    sensorCurrent = sensorCurrent as number - diff;
                    objectModels[Number(req.query.objectID)][`${sensor.tag}`] = Number(sensorCurrent.toFixed(2))
                }
            }
            functions.push(sensorChangeFunction)
        })
        objectStart(functions)
        res.json({
            response : {
                message : 'Object started!',
                code: 0
            }
        })
    }).catch((err:String) => {
        new Error(err.toString());
    })
})

app.get('/api/stopObject', (req: Request, res:Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        });
        return;
    }
    if(objectModels[Number(req.query.objectID)] === undefined) {
        res.json({
            response: {
                message: 'Object with this id is not started',
                code: 1
            }
        })
        return
    }
    clearInterval(intervals[Number(req.query.objectID)])
    delete objectModels[Number(req.query.objectID)]
    res.json({
        response: {
            message: 'Object successfully stopped',
            code: 0
        }
    })
})

app.get('/api/getObject', (req: Request, res: Response) => {
    if (req.query.objectID === undefined) {
        res.json({
            response: {
                message: 'objectID is required get parameter of this query',
                code: 1
            }
        });
        return;
    }
    if(objectModels[Number(req.query.objectID)] === undefined) {
        res.json({
            response: {
                message: 'Object with this id is not started',
                code: 1
            }
        })
        return
    }
    res.json({
        response: {
            objectState: objectModels[Number(req.query.objectID)],
            code: 0
        }
    })
})

app.listen(port, () => {
    console.log(`app is listening port ${port}`)
})


export {app}
