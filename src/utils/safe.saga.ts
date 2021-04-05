import {call} from "redux-saga/effects";

export const safe = (startCB:any=null, errorCB:any = null, finallyCB:any=null, saga:any, ...args:any) => function* (action:any) {
    yield call(startCB)
    try {
        yield call(saga, ...args, action)
    } catch (err) {
        yield call(errorCB, ...args, err)
    } finally {
        yield call(finallyCB)
    }
}
