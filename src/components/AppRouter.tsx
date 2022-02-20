import React from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useTypedSelector} from "./hooks/useTypeSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
        </Routes>
    );
};

export default AppRouter;