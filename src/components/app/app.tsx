import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { useRoutes } from '../../routes';
import {store} from '../../store/store';
import {LayoutApp} from '../layout/layout';
import 'antd/dist/antd.css'

function App() {
    const routes=useRoutes()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LayoutApp>
                    {routes}
                </LayoutApp>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
