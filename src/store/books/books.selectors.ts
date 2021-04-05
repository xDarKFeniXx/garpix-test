import {AppStateType} from "../store";

export const loadingSelector=(state:AppStateType)=>state.books.loading
export const errorSelector=(state:AppStateType)=>state.books.error
export const booksListSelector=(state:AppStateType)=>state.books.booksList
export const bookByIdSelector=(state:AppStateType, id:number)=>{
    return state.books.booksList.find(book=>book.id===id)
}
