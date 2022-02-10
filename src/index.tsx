import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";


ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Home/>
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
);
