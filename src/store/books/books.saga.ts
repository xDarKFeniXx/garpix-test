import {call, delay, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {ASYNC_ADD_NEW_BOOK, ASYNC_DELETE_BOOK, ASYNC_UPDATE_BOOK, booksAC, FETCH_DATA} from "./books.reducer";
import {fetchNormalizeBooks} from "../../utils/fetch-normolize-books.api";
import {IDeleteAC, INewAC, IUpdateAC} from "../../types/async-actions.interface";
import {IBookDTO, INormalizeBook} from "../../types/book.interface";
import {authorsListSelector} from "../authors/authors.selectors";
import {IAuthor} from "../../types/author.interface";

function* fetchBooks() {
    yield put(booksAC.setLoadingAC())
    try {
        const books:INormalizeBook[] = yield call(fetchNormalizeBooks)
        yield delay(2000)
        yield put(booksAC.setDataAC(books))
    } catch (e) {
        yield put(booksAC.setErrorAC(e))
    } finally {
        yield put(booksAC.setLoadedAC())
    }
}
function* deleteBook(action:IDeleteAC<typeof ASYNC_DELETE_BOOK>) {
    yield put(booksAC.setLoadingAC())
    try {
        yield put(booksAC.deleteBookAC(action.payload))
    } catch (e) {
        yield put(booksAC.setErrorAC(e))
    } finally {
        yield put(booksAC.setLoadedAC())
    }
}
function* addNewBook(action:INewAC<typeof ASYNC_ADD_NEW_BOOK, IBookDTO>){
    yield put(booksAC.setLoadingAC())
    try {
        const created_at=new Date()
        const authors:IAuthor[]=yield select(authorsListSelector)
        const author=authors.find(author=>author.id===action.payload.author_id)
        const id=new Date().getTime()+Math.floor(Math.random()*100)
        const link=`/books${id}`
        if(author){
        const newBook:INormalizeBook={...action.payload, created_at, author_last_name:author.last_name, author_first_name:author.first_name, id, link}
        yield put(booksAC.addNewBookAC(newBook))
        } else {
            throw Error('Не верный автор книги')
        }
    } catch (e) {
        yield put(booksAC.setErrorAC(e))
    } finally {
        yield put(booksAC.setLoadedAC())
    }
}
function* updateBook(action:IUpdateAC<typeof ASYNC_UPDATE_BOOK, INormalizeBook>){
    yield put(booksAC.setLoadingAC())
    try {
        yield put(booksAC.updateBookAC(action.payload))
    } catch (e) {
        yield put(booksAC.setErrorAC(e))
    } finally {
        yield put(booksAC.setLoadedAC())
    }
}
export function* booksSaga() {
    yield takeLatest(FETCH_DATA, fetchBooks)
    yield takeEvery(ASYNC_DELETE_BOOK, deleteBook)
    yield takeLatest(ASYNC_ADD_NEW_BOOK, addNewBook)
    yield takeLatest(ASYNC_UPDATE_BOOK, updateBook)
}
