import {LoadingEnum} from "../../types/loading.enum";
import {IAuthor} from "../../types/author.interface";
import {InferActionsTypes} from "../store";


const initialState={
    loading: LoadingEnum.NEVER,
    error: '',
    authorsList:[] as IAuthor[]
}
export const SET_LOADING='authors/SET_LOADING'
export const SET_LOADED='authors/SET_LOADED'
export const SET_ERROR='authors/SET_ERROR'
export const SET_DATA='authors/SET_DATA'
export const FETCH_DATA='authors/FETCH_DATA'
export const authorsReducer=(state=initialState, action:ActionType)=>{
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: LoadingEnum.LOADING}
        case SET_LOADED:
            return {...state, loading: LoadingEnum.LOADED}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_DATA:
            return {...state, authorsList: action.payload}
        default:
            return state

    }

}
export const authorsAC={
    setLoadingAC:()=>({type: SET_LOADING} as const),
    setLoadedAC:()=>({type: SET_LOADED} as const),
    setErrorAC:(error:string)=>({type: SET_ERROR, payload:error} as const),
    setDataAC:(data: IAuthor[])=>({type: SET_DATA, payload:data} as const),
}
export const asyncAuthorsAC={
    fetchData:()=>({type: FETCH_DATA} as const)
}
type ActionType=InferActionsTypes<typeof authorsAC>
