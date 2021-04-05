import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import { useRoutes } from '../../routes';
import configureStore from '../../store/store';
import {LayoutApp} from '../layout/layout';
import 'antd/dist/antd.css'

const {store, persistor}=configureStore()

function App() {
    const routes=useRoutes()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <LayoutApp>
                    {routes}
                </LayoutApp>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
