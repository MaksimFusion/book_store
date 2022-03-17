import React, {useEffect, useState} from 'react';
import {setAuth, setUser, check} from "./store/action_creators/auth";
import {useDispatch} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        check()
            .then((user) => {
                dispatch(setAuth(true));
                dispatch(setUser(user));
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <h3>Загрузка, подождите</h3>;
    }

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;