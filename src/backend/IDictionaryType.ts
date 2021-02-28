interface IDictionary {
    [index: string]: Number
}
interface ObjectPlaceHolder {
    [index: number] : IDictionary
}
interface IntervalPlaceholder {
    [index: number] : ReturnType<typeof setTimeout>
}
interface HMIPayload {
    [index: number] : JSON
}


export type {IDictionary, ObjectPlaceHolder, IntervalPlaceholder, HMIPayload}