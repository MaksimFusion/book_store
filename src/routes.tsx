import Admin from "./components/pages/Admin"
import {
    ADMIN_ROUTE, BASKET_ROUTE,
    HOME_ROUTE, REGISTRATION_ROUTE,
    LOGIN_ROUTE, BOOK_ROUTE
} from "./components/utils/consts";
import Basket from "./components/pages/Basket";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import BookPage from "./components/pages/BookPage";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    }
]