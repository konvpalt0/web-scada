import {Express, Request, Response} from "express";
import {HMIPayload, IDictionary} from "./IDictionaryType";
import {db,objectModels,intervals} from "./server";
import {SensorState} from "./IDictionaryType";

export const routes = (app: Express) => {
app.get('/api', (req: Request, res: Response) => {
    console.log(req.query)
    db.any('SELECT * from Users').then((value: JSON) => {
        res.json(value)
    }, (err:string) => {
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
    }).catch((err:string) => {
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
            }).catch((err:string) => {
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
    }).catch((err: string) => {
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
    }).catch((err:string) => {
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
    db.any(`select hmi from HMI where owner = ${req.query.objectID}`).then((result: Array<{hmi: string}>) => {
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
        result.forEach((element:{hmi: string}, index: number) => {
            hmi[index] = JSON.parse(element.hmi.toString())
        })
        res.json({
            response : {
                hmi: hmi,
                code: 0
            }
        })
    }).catch((err: string) => {
        console.log(err);
    })
})

app.post('/api/setSensors',(req: Request, res:Response) => {
    console.log(req.body);
    if(req.body.hasOwnProperty('sensors') && req.body.hasOwnProperty('objectID')) {if(!req.body.sensors.length) {
        res.json({response : {
                message: 'Sensors must not be empty',
                code: 1
            }})
        return
    } else {
        req.body.sensors.forEach((sensor: {objectID: number, tag: string, measure: string, min: number, max: number}) => {
            console.log(sensor);
            db.any(`insert into Sensors(owner, tag, measure, min, max) values(${req.body.objectID},'${sensor.tag}','${sensor.measure}',${sensor.min},${sensor.max})`).then( (result:JSON) => {
            }).catch((err:string) => {
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
    db.any(`select * from sensors where owner = ${req.query.objectID}`).then((sensors :Array<{id: number, objectID: number, tag: string, measure: string, min: number, max: number}>) => {
        if(!sensors.length) {res.json({response : {
                message: 'This object does not have any sensors',
                code: 1
            }})
            return
        }
        if(objectModels[Number(req.query.objectID)] === undefined) {
            objectModels[Number(req.query.objectID)] = []
        }
        const functions:Array<Function> = []
        const objectStart = (sensorsFunctions: Array<Function>) => {
            intervals[Number(req.query.objectID)] = setInterval(() => {
                sensorsFunctions.forEach(func => {
                    func()
                })
                //console.log(objectModels);
            },1000)
        }
        sensors.forEach(sensor => {
            let flag = false
            const sensorChangeFunction = () => {
                if(!objectModels[Number(req.query.objectID)].filter(it => it.sensorTag == sensor.tag).length) objectModels[Number(req.query.objectID)].push({
                    sensorTag: sensor.tag,
                    sensorState: [{
                        value: sensor.min,
                        measure: sensor.measure,
                        date: new Date()
                    }]
                })
                let sensorMin = sensor.min;
                //let sensorCurrent = objectModels[Number(req.query.objectID)].filter(it => it.sensorTag == sensor.tag)[0].sensorState.splice(-1)[0].value;
                let sensorCurrent = objectModels[Number(req.query.objectID)].filter(it => it.sensorTag == sensor.tag)[0].sensorState.slice(-1)[0].value;
                let diff = ((sensor.max) - (sensorMin)) / 15
                let sensorMax: Number = sensor.max - diff;
                let newState = {
                   value : sensor.min,
                   measure: sensor.measure,
                   date: new Date()
                }
                if(Number(sensorCurrent.toFixed(2)) < Number(sensorMax.toFixed(2)) && !flag) {
                    sensorCurrent = sensorCurrent + diff;
                    newState.value = Number(sensorCurrent.toFixed(2))
                } else if(Number(sensorCurrent.toFixed(2)) > Number(sensorMin.toFixed(2)) && flag) {
                    sensorCurrent = sensorCurrent - diff;
                    newState.value = Number(sensorCurrent.toFixed(2))
                }
                if(Number(sensorCurrent.toFixed(2)) <= Number(sensorMin.toFixed(2))) {
                    flag = false
                }
                if(Number(sensorCurrent.toFixed(2)) >= Number(sensorMax.toFixed(2))) {
                    flag = true
                }
                let index = objectModels[Number(req.query.objectID)].findIndex(it => it.sensorTag == sensor.tag)
                //objectModels[Number(req.query.objectID)].filter(it => it.sensorTag == sensor.tag)[0].sensorState.push(newState)
                objectModels[Number(req.query.objectID)][index].sensorState.push(newState)
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
    }).catch((err:string) => {
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

app.get('/api/getState', (req: Request, res: Response) => {
    let steps = req.query.steps === undefined ? 1 : Number(req.query.steps)
    if((req.query.steps != undefined && isNaN(Number(req.query.steps))) || Number(req.query.steps) <= 0 ) {
        res.json({
            response: {
                message: 'parameter steps is invalid',
                code: 1
            }
        });
        return;
    }
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
    if(req.query.sensorTag === undefined) {
        let copyState: { sensorTag: string; sensorState: SensorState[]; }[] = []
        objectModels[Number(req.query.objectID)].forEach( sensor => {
                let sensorCopy = Object.assign({},sensor);
                sensorCopy.sensorState = sensor.sensorState.slice(0-steps)
                copyState.push(sensorCopy)
            }
        )
        res.json({
            response: {
                objectState: copyState,
                code: 0
            }
        })
        return
    }
    let copyState = objectModels[Number(req.query.objectID)].filter(it => it.sensorTag === req.query.sensorTag)
    if(copyState === undefined) {
        res.json({
            response: {
                message: 'Object does not have sensor with this tag',
                code: 1
            }
        })
        return
    }
    copyState[0].sensorState = copyState[0].sensorState.slice(0 - steps)
    res.json({
        response: {
            objectState: copyState,
            code: 0
        }
    })
})
}
