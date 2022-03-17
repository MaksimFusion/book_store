import {Dispatch} from "redux";
import {ActionEnum, AuthorsAction} from "../reducers/authors/types";
import {$host} from "./API";


export const fetchAuthors = () => {
    return async (dispatch: Dispatch<AuthorsAction>) => {
        try {
            dispatch({type: ActionEnum.FETCH_AUTHORS})
            const response = await $host.get("api/genre")
            dispatch({
                type: ActionEnum.FETCH_AUTHORS_SUCCESS, payload: response.data
            });
        } catch (e) {
            dispatch({
                type: ActionEnum.FETCH_AUTHORS_ERROR,
                payload: "Произошла ошибка при загрузке авторов"
            });
        }
    }
}
export const setSelectedAuthors = (id: number) => {
    return (dispatch: Dispatch<AuthorsAction>) => {
        dispatch({type: ActionEnum.SET_SELECTED_AUTHORS, payload: id})
    }
}