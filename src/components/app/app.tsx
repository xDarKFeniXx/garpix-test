import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import {useRoutes} from '../../pages/routes';
import configureStore from '../../store/store';
import {LayoutApp} from '../layout/layout';
import 'antd/dist/antd.css'
import ErrorBoundary from '../error-boundary/error-boundary';

const {store, persistor} = configureStore()

function App() {
    const routes = useRoutes()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary>
                    <BrowserRouter>
                        <LayoutApp>
                            {routes}
                        </LayoutApp>
                    </BrowserRouter>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    );
}

export default App;
