import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Layout from "./components/layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
