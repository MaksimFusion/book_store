export interface IUser {
    id: number | null;
    email: string | null;
    name: string | null;
    role: string | null;
    img: string | null;
    DOB: string | null;
}
export interface IUserState {
    isAuth: boolean;
    user: null | IUser;
    error: null | string | object;
}

export enum ActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_ERROR = "SET_ERROR",
    SET_ITEM_BASKET = "SET_ITEM_BASKET",
    DELETE_ITEM_BASKET = "DELETE_ITEM_BASKET",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
    type: ActionEnum.SET_AUTH;
    payload: boolean;
}
export interface SetUserAction {
    type: ActionEnum.SET_USER;
    payload: IUser;
}

export interface SetErrorAction {
    type: ActionEnum.SET_ERROR;
    payload: string;
}

export interface SetIsLoadingAction {
    type: ActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetItemAction {
    type: ActionEnum.SET_ITEM_BASKET;
    payload: any;
}

export interface DeleteItemAction {
    type: ActionEnum.DELETE_ITEM_BASKET;
    payload: any;
}


export type UserAction =
    SetAuthAction |
    SetItemAction |
    DeleteItemAction |
    SetIsLoadingAction |
    SetErrorAction |
    SetUserAction
