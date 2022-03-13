import {
    ActionEnum,
    IUser,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction,
} from "../reducers/auth/types";
import {AppDispatch} from "../index";
import jwt_decode from "jwt-decode"
import {$authHost, $host} from "./API";


export const UserActionCreators = {
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: ActionEnum.SET_IS_LOADING, payload}),
    setIsAuth: (payload: boolean): SetAuthAction => ({type: ActionEnum.SET_AUTH, payload}),
    setError: (payload: string): SetErrorAction => ({type: ActionEnum.SET_ERROR, payload}),
    setUser: (payload: IUser): SetUserAction => ({type: ActionEnum.SET_USER, payload}),

    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const {data} = await $host.post(`user/login`, {email, password})
            localStorage.setItem('token', data.token)
            return jwt_decode(data.token)
        } catch (e) {
            dispatch(UserActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(UserActionCreators.setIsAuth(false))
        } catch (e) {
            dispatch(UserActionCreators.setError('Произошла ошибка!'))
        }
    },
    registration: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const {data} = await $host.post(`user/registration`, {email, password, role: "ADMIN"});
            dispatch(UserActionCreators.setIsLoading(true))
            dispatch(UserActionCreators.setIsAuth(true))
            localStorage.setItem('token', data.token)
            return jwt_decode(data.token)
        } catch (e) {
            dispatch(UserActionCreators.setError('Произошла ошибка при регистрации'))
        }
    },
    check: async () => {
        const {data} = await $authHost.get(`user/auth`);
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    },
    updatePassword: async (oldPassword: string, newPassword: string) => {
        const {data} = await $authHost.post(`user/.updatePassword`);
        localStorage.setItem('token', data.token);
        const token_decode: any = jwt_decode(data.token);
        return token_decode.user;
    },
    updateUser: async (name: string, file: File) => {
        try {
            const {data} = await $authHost.post(`user/updateUser`);
            localStorage.setItem('token', data.token);
            const token_decode: any = jwt_decode(data.token);
            return token_decode.user;
        } catch (e) {

        }
    },
}