interface IDictionary {
    [index: string]: Number
}
interface ObjectPlaceHolder {
    [index: number] : IDictionary
}


export type {IDictionary, ObjectPlaceHolder}