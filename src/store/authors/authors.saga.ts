import {delay, put, takeEvery, takeLatest} from "redux-saga/effects";
import {ASYNC_ADD_NEW_AUTHOR, ASYNC_DELETE_AUTHOR, ASYNC_UPDATE_AUTHOR, authorsAC, FETCH_DATA} from "./authors.reducer";
import {authors} from "../../utils/db";
import {IDeleteAC, INewAC, IUpdateAC} from "../../types/async-actions.interface";
import {IAuthor, IAuthorDTO} from "../../types/author.interface";
import {safe} from "../../utils/safe.saga";



function* fetchAuthors() {
    yield delay(2000)
    yield put(authorsAC.setDataAC(authors))
}

function* deleteAuthor(action: IDeleteAC<typeof ASYNC_DELETE_AUTHOR>) {
    yield put(authorsAC.deleteAuthorAC(action.payload))
}

function* addNewAuthor(action: INewAC<typeof ASYNC_ADD_NEW_AUTHOR, IAuthorDTO>) {
    const id = new Date().getTime() + Math.floor(Math.random() * 100)
    yield put(authorsAC.addNewAuthorAC({...action.payload, id}))
}

function* updateAuthor(action: IUpdateAC<typeof ASYNC_UPDATE_AUTHOR, IAuthorDTO>) {
    if (!action.payload.id) {
            yield put(authorsAC.updateAuthorAC(action.payload as IAuthor))
        } else {
            throw Error('не верный ID автора')
        }
}
export function* authorsSaga() {
    yield takeLatest(FETCH_DATA, safe(startCB, onError, finallyCB, fetchAuthors))
    yield takeEvery(ASYNC_UPDATE_AUTHOR, safe(startCB, onError, finallyCB, updateAuthor))
    yield takeEvery(ASYNC_ADD_NEW_AUTHOR, safe(startCB, onError, finallyCB, addNewAuthor))
    yield takeEvery(ASYNC_DELETE_AUTHOR, safe(startCB, onError, finallyCB, deleteAuthor))
}

function* onError(e:Error){
    yield put(authorsAC.setErrorAC(e.message))
}
function* finallyCB(){
    yield put(authorsAC.setLoadedAC())
}
function* startCB(){
    yield put(authorsAC.setLoadingAC())
}
