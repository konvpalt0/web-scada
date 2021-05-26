interface IDictionary {
    [index: string]: Number
}
interface SensorState {
    value: number,
    date: Date
}

interface Meta {
    sensorTag: string,
    measure: string,
    x: number,
    y: number
}

interface ObjectPlaceHolder {
    [index: number] : Array<{meta: Meta, sensorState: Array<SensorState>}>
}
interface IntervalPlaceholder {
    [index: number] : ReturnType<typeof setTimeout>
}
interface HMIPayload {
    [index: number] : JSON
}


export type {IDictionary, ObjectPlaceHolder, IntervalPlaceholder, HMIPayload, SensorState, Meta}