import {ActionEnum, IUserState, UserAction} from "./types";

const initialState: IUserState = {
    isAuth: true,
    user: null,
    error: null
}

export default function authReducer(state = initialState, action: UserAction): IUserState {
    switch (action.type) {
        case ActionEnum.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case ActionEnum.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
