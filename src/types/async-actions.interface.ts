export interface IDeleteAC<T>{
    type: T,
    payload: number

}
export interface IUpdateAC<T, D>{
    type: T,
    payload: D
}
export interface INewAC<T, D>{
    type: T,
    payload: D
}
