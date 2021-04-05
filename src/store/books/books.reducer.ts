import {IBookDTO, INormalizeBook} from "../../types/book.interface";
import {LoadingEnum} from "../../types/loading.enum";
import {InferActionsTypes} from "../store";


const initialState = {
    loading: LoadingEnum.NEVER,
    error: '',
    booksList: [] as INormalizeBook[]
}
export const SET_LOADING = 'books/SET_LOADING'
export const SET_LOADED = 'books/SET_LOADED'
export const SET_ERROR = 'books/SET_ERROR'
export const SET_DATA = 'books/SET_DATA'
export const ADD_NEW_BOOK = 'books/ADD_NEW_BOOK'
export const DELETE_BOOK = 'books/DELETE_BOOK'
export const UPDATE_BOOK = 'books/UPDATE_BOOK'
export const ASYNC_ADD_NEW_BOOK = 'books/ASYNC_ADD_NEW_BOOK'
export const ASYNC_DELETE_BOOK = 'books/ASYNC_DELETE_BOOK'
export const ASYNC_UPDATE_BOOK = 'books/ASYNC_UPDATE_BOOK'
export const FETCH_DATA = 'books/FETCH_DATA'
export const booksReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: LoadingEnum.LOADING}
        case SET_LOADED:
            return {...state, loading: LoadingEnum.LOADED}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_DATA:
            return {...state, booksList: action.payload}
        case ADD_NEW_BOOK:
            return {...state, booksList: [...state.booksList, action.payload]}
        case DELETE_BOOK: {
            const newList = state.booksList.filter(book => book.id !== action.payload)
            return {...state, booksList: newList}
        }
        case UPDATE_BOOK: {
            const index = state.booksList.findIndex(book => book.id === action.payload.id)
            const newList = [...state.booksList.slice(0, index), action.payload, ...state.booksList.slice(index + 1)]
            return {...state, booksList: newList}
        }
        default:
            return state

    }

}
export const booksAC = {
    setLoadingAC: () => ({type: SET_LOADING} as const),
    setLoadedAC: () => ({type: SET_LOADED} as const),
    setErrorAC: (error: string) => ({type: SET_ERROR, payload: error} as const),
    setDataAC: (data: INormalizeBook[]) => ({type: SET_DATA, payload: data} as const),
    addNewBookAC: (data: INormalizeBook) => ({type: ADD_NEW_BOOK, payload: data} as const),
    deleteBookAC: (data: number) => ({type: DELETE_BOOK, payload: data} as const),
    updateBookAC: (data: INormalizeBook) => ({type: UPDATE_BOOK, payload: data} as const),
}
export const asyncBooksAC = {
    fetchData: () => ({type: FETCH_DATA} as const),
    addNewBook: (data: IBookDTO) => ({type: ASYNC_ADD_NEW_BOOK, payload:data} as const),
    deleteBook: (data: number) => ({type: ASYNC_DELETE_BOOK, payload:data} as const),
    updateBook: (data: INormalizeBook) => ({type: ASYNC_UPDATE_BOOK, payload:data} as const),

}
export type ActionType = InferActionsTypes<typeof booksAC>

