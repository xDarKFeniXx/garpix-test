import {AppStateType} from "../store";

export const loadingSelector=(state:AppStateType)=>state.authors.loading
export const errorSelector=(state:AppStateType)=>state.authors.error
export const authorsListSelector=(state:AppStateType)=>state.authors.authorsList
