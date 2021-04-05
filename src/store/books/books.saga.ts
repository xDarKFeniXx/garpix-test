import {call, delay, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {ASYNC_ADD_NEW_BOOK, ASYNC_DELETE_BOOK, ASYNC_UPDATE_BOOK, booksAC, FETCH_DATA} from "./books.reducer";
import {fetchNormalizeBooks} from "../../utils/fetch-normolize-books.api";
import {IDeleteAC, INewAC, IUpdateAC} from "../../types/async-actions.interface";
import {IBookDTO, INormalizeBook} from "../../types/book.interface";
import {authorsListSelector} from "../authors/authors.selectors";
import {IAuthor} from "../../types/author.interface";
import { safe } from "../../utils/safe.saga";

function* fetchBooks() {

        const books:INormalizeBook[] = yield call(fetchNormalizeBooks)
        yield delay(2000)
        yield put(booksAC.setDataAC(books))

}
function* deleteBook(action:IDeleteAC<typeof ASYNC_DELETE_BOOK>) {
    yield put(booksAC.setLoadingAC())
    try {
        yield put(booksAC.deleteBookAC(action.payload))
    } catch (e) {
        yield put(booksAC.setErrorAC(e.message))
    } finally {
        yield put(booksAC.setLoadedAC())
    }
}
function* addNewBook(action:INewAC<typeof ASYNC_ADD_NEW_BOOK, IBookDTO>){

        const created_at=new Date()
        const authors:IAuthor[]=yield select(authorsListSelector)
        const author=authors.find(author=>author.id===action.payload.author_id)
        const id=new Date().getTime()+Math.floor(Math.random()*100)
        const link=`/books/${id}`
        if(author){
        const newBook:INormalizeBook={...action.payload, created_at, author_last_name:author.last_name, author_first_name:author.first_name, id, link}
        yield put(booksAC.addNewBookAC(newBook))
        } else {
            throw new Error('Не верный автор книги')
        }

}
function* updateBook(action:IUpdateAC<typeof ASYNC_UPDATE_BOOK, INormalizeBook>){

        yield put(booksAC.updateBookAC(action.payload))

}
export function* booksSaga() {
    yield takeLatest(FETCH_DATA, safe(startCB, onError, finallyCB, fetchBooks))
    yield takeEvery(ASYNC_DELETE_BOOK, safe(startCB, onError, finallyCB, deleteBook))
    yield takeEvery(ASYNC_ADD_NEW_BOOK, safe(startCB, onError, finallyCB, addNewBook))
    yield takeEvery(ASYNC_UPDATE_BOOK, safe(startCB, onError, finallyCB, updateBook))
}
function* onError(e:Error){
    yield put(booksAC.setErrorAC(e.message))
}
function* finallyCB(){
    yield put(booksAC.setLoadedAC())
}
function* startCB(){
    yield put(booksAC.setLoadingAC())
}
