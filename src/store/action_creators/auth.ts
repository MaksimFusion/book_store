import {
    ActionEnum,
    IUser,
    SetAuthAction,
    SetUserAction,
} from "../reducers/auth/types";
import jwt_decode from "jwt-decode"
import {$authHost, $host} from "./API";
import {Dispatch} from "redux";

export const setUser = (user: IUser) => {
    return (dispatch: Dispatch<SetUserAction>) => {
        dispatch({
            type: ActionEnum.SET_USER,
            payload: user,
        });
    };
};
export const setAuth = (isAuth: boolean) => {
    return (dispatch: Dispatch<SetAuthAction>) => {
        dispatch({
            type: ActionEnum.SET_AUTH,
            payload: isAuth,
        });
    };
};

export const registration = async (email: string,password: string) => {
    const response = await $host.post("api/user/registration", {
        email,
        password,
        role: "ADMIN",
    });
    localStorage.setItem("accessToken", response.data.token);
    const { data } = response;
    const token_decode: any = jwt_decode(data.token);
    return token_decode.user;
};

export const login = async (email: string, password: string) => {
    const response = await $host.post("api/user/login", {
        email,
        password,
    });
    localStorage.setItem("accessToken", response.data.token);
    const { data } = response;
    const token_decode: any = jwt_decode(data.token);
    return token_decode.user;
};

export const check = async () => {
    const response = await $authHost.get("api/user/auth");
    localStorage.setItem('accessToken', response.data.token)
    const { data } = response;
    const token_decode: any = jwt_decode(data.token);
    return token_decode.user;
};

export const updatePassword = async (oldPassword: string,newPassword: string) => {
    const reqData = new FormData();
    reqData.append("oldPassword", oldPassword);
    reqData.append("newPassword", newPassword);
    const response = await $authHost.put("api/user/updatepassword", reqData);
    localStorage.setItem("accessToken", response.data.token);
    const { data } = response;
    const token_decode: any = jwt_decode(data.token);
    return token_decode.user;
};

export const updateUser = async (name: string, file: File) => {
    const reqData = new FormData();
    reqData.append("name", name);
    reqData.append("file", file);
    const response = await $authHost.put("api/user/update", reqData);
    localStorage.setItem("accessToken", response.data.token);
    const { data } = response;
    const token_decode: any = jwt_decode(data.token);
    return token_decode.user;
};