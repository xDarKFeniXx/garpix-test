import {put, takeLatest} from "redux-saga/effects";
import {authorsAC, FETCH_DATA} from "./authors.reducer";
import {authors} from "../../db";


function* fetchAuthors() {
    yield put(authorsAC.setLoadingAC())
    try {
        yield put(authorsAC.setDataAC(authors))
    } catch (e) {
        yield put(authorsAC.setErrorAC(e))
    } finally {
        yield put(authorsAC.setLoadedAC())
    }
}
export function* authorsSaga(){
    yield takeLatest(FETCH_DATA, fetchAuthors)
}
