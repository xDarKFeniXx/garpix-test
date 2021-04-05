import {all} from 'redux-saga/effects'
import {booksSaga} from "./books/books.saga";
import {authorsSaga} from "./authors/authors.saga";


function* testSaga() {
    yield console.log('hello from saga')
}

export function* rootSaga() {
    yield all([
        testSaga(),
        booksSaga(),
        authorsSaga()

    ])
}
