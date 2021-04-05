import {LoadingEnum} from "../../types/loading.enum";
import {IAuthor, IAuthorDTO} from "../../types/author.interface";
import {InferActionsTypes} from "../store";


const initialState = {
    loading: LoadingEnum.NEVER,
    error: '',
    authorsList: [] as IAuthor[]
}
export const SET_LOADING = 'authors/SET_LOADING'
export const SET_LOADED = 'authors/SET_LOADED'
export const SET_ERROR = 'authors/SET_ERROR'
export const SET_DATA = 'authors/SET_DATA'
export const FETCH_DATA = 'authors/FETCH_DATA'
export const ADD_NEW_AUTHORS = 'authors/ADD_NEW_AUTHORS'
export const DELETE_AUTHORS = 'authors/DELETE_AUTHORS'
export const UPDATE_AUTHORS = 'authors/UPDATE_AUTHORS'
export const ASYNC_ADD_NEW_AUTHOR = 'authors/ASYNC_ADD_NEW_AUTHOR'
export const ASYNC_DELETE_AUTHOR = 'authors/ASYNC_DELETE_AUTHOR'
export const ASYNC_UPDATE_AUTHOR = 'authors/ASYNC_UPDATE_AUTHOR'

export const authorsReducer = (state = initialState, action: ActionType): typeof initialState=> {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: LoadingEnum.LOADING}
        case SET_LOADED:
            return {...state, loading: LoadingEnum.LOADED}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_DATA:
            return {...state, authorsList: action.payload}
        case ADD_NEW_AUTHORS:
            return {...state, authorsList: [...state.authorsList, action.payload]}
        case DELETE_AUTHORS: {
            const newList = state.authorsList.filter(book => book.id !== action.payload)
            return {...state, authorsList: newList}
        }
        case UPDATE_AUTHORS: {
            const index = state.authorsList.findIndex(author => author.id === action.payload.id)
            const newList = [...state.authorsList.slice(0, index), action.payload, ...state.authorsList.slice(index + 1)]
            return {...state, authorsList: newList}
        }
        default:
            return state

    }

}
export const authorsAC = {
    setLoadingAC: () => ({type: SET_LOADING} as const),
    setLoadedAC: () => ({type: SET_LOADED} as const),
    setErrorAC: (error: string) => ({type: SET_ERROR, payload: error} as const),
    setDataAC: (data: IAuthor[]) => ({type: SET_DATA, payload: data} as const),
    addNewAuthorAC: (data: IAuthor) => ({type: ADD_NEW_AUTHORS, payload: data} as const),
    deleteAuthorAC: (data: number) => ({type: DELETE_AUTHORS, payload: data} as const),
    updateAuthorAC: (data: IAuthor) => ({type: UPDATE_AUTHORS, payload: data} as const),
}
export const asyncAuthorsAC = {
    fetchData: () => ({type: FETCH_DATA} as const),
    addNewAuthor: (data: IAuthorDTO) => ({type: ASYNC_ADD_NEW_AUTHOR, payload:data} as const),
    deleteAuthor: (data: number) => ({type: ASYNC_DELETE_AUTHOR, payload:data} as const),
    updateAuthor: (data: IAuthorDTO) => ({type: ASYNC_UPDATE_AUTHOR, payload:data} as const),
}
type ActionType = InferActionsTypes<typeof authorsAC>
