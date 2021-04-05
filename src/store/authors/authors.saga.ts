import {put, takeEvery, takeLatest} from "redux-saga/effects";
import {ASYNC_ADD_NEW_AUTHOR, ASYNC_DELETE_AUTHOR, ASYNC_UPDATE_AUTHOR, authorsAC, FETCH_DATA} from "./authors.reducer";
import {authors} from "../../db";
import {IDeleteAC, INewAC, IUpdateAC} from "../../types/async-actions.interface";
import {IAuthor, IAuthorDTO} from "../../types/author.interface";


function* fetchAuthors() {
    yield put(authorsAC.setLoadingAC())
    try {
        yield put(authorsAC.setDataAC(authors))
    } catch (e) {
        yield put(authorsAC.setErrorAC(e.message))
    } finally {
        yield put(authorsAC.setLoadedAC())
    }
}

function* deleteAuthor(action: IDeleteAC<typeof ASYNC_DELETE_AUTHOR>) {
    yield put(authorsAC.setLoadingAC())
    try {
        yield put(authorsAC.deleteAuthorAC(action.payload))
    } catch (e) {
        yield put(authorsAC.setErrorAC(e.message))
    } finally {
        yield put(authorsAC.setLoadedAC())
    }
}

function* addNewAuthor(action: INewAC<typeof ASYNC_ADD_NEW_AUTHOR, IAuthorDTO>) {
    yield put(authorsAC.setLoadingAC())
    try {
        const id = new Date().getTime() + Math.floor(Math.random() * 100)
        yield put(authorsAC.addNewAuthorAC({...action.payload, id}))
    } catch (e) {
        yield put(authorsAC.setErrorAC(e.message))
    } finally {
        yield put(authorsAC.setLoadedAC())
    }
}

function* updateAuthor(action: IUpdateAC<typeof ASYNC_UPDATE_AUTHOR, IAuthorDTO>) {
    yield put(authorsAC.setLoadingAC())
    try {
        if (!action.payload.id) {
            yield put(authorsAC.updateAuthorAC(action.payload as IAuthor))
        } else {
            throw Error('не верный ID автора')
        }
    } catch (e) {
        yield put(authorsAC.setErrorAC(e.message))
    } finally {
        yield put(authorsAC.setLoadedAC())
    }
}

export function* authorsSaga() {
    yield takeLatest(FETCH_DATA, fetchAuthors)
    yield takeEvery(ASYNC_UPDATE_AUTHOR, updateAuthor)
    yield takeEvery(ASYNC_ADD_NEW_AUTHOR, addNewAuthor)
    yield takeEvery(ASYNC_DELETE_AUTHOR, deleteAuthor)
}
