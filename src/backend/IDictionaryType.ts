interface IDictionary {
    [index: string]: Number
}
interface SensorState {
    value: number,
    measure: string,
    date: Date
}
interface ObjectPlaceHolder {
    [index: number] : Array<{sensorTag: string, sensorState: Array<SensorState>}>
}
interface IntervalPlaceholder {
    [index: number] : ReturnType<typeof setTimeout>
}
interface HMIPayload {
    [index: number] : JSON
}


export type {IDictionary, ObjectPlaceHolder, IntervalPlaceholder, HMIPayload, SensorState}