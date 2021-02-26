interface IDictionary {
    [index: string]: Number
}
interface ObjectPlaceHolder {
    [index: number] : IDictionary
}
interface IntervalPlaceholder {
    [index: number] : ReturnType<typeof setTimeout>
}


export type {IDictionary, ObjectPlaceHolder, IntervalPlaceholder}