import { combineReducers } from "redux";
import {booksReducer} from "./books/books.reducer";
import {authorsReducer} from "./authors/authors.reducer";

export const rootReducer=combineReducers({
    books: booksReducer,
    authors: authorsReducer
})
