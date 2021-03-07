import {Response, Request} from 'express'
import {IntervalPlaceholder, ObjectPlaceHolder} from "./IDictionaryType";
import {routes} from "./Routes";

const app = require('express')()
const pgp = require('pg-promise')({})
const bodyParser = require('body-parser')
routes(app)

app.use(function(req:Request, res:Response, next: any) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const objectModels = {} as ObjectPlaceHolder
const intervals = {} as IntervalPlaceholder

let cn = {
    host: 'localhost', // 'localhost' is the default
    port: 5432, // 5432 is the default;
    database: 'webscada',
    user: 'operator',
    password: 'operator'
};
const db = pgp(cn)
const port = 3001

app.listen(port, () => {
    console.log(`app is listening port ${port}`)
})

export {app,db,objectModels,intervals}
