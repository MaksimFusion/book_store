import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from "./components/layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                    <Layout>
                        <App/>
                    </Layout>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );