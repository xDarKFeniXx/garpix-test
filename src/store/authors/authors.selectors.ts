import {AppStateType} from "../store";

export const loadingSelector=(state:AppStateType)=>state.authors.loading
export const errorSelector=(state:AppStateType)=>state.authors.error
export const authorsListSelector=(state:AppStateType)=>state.authors.authorsList
export const authorByIdSelector=(state:AppStateType, id:number)=>{
    return state.authors.authorsList.find(author=>author.id===id)
}
