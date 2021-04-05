import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "./root.reducer";
import {rootSaga} from "./root.saga";


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(sagaMiddleware)))

export default function configureStore() {
    let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    let persistor = persistStore(store)
    return {store, persistor}
}
