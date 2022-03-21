import {Dispatch} from "redux";
import {ActionEnum, GenresAction} from "../reducers/genres/types";
import {$host} from "./API";


export const fetchGenres = () => {
    return async (dispatch: Dispatch<GenresAction>) =>{
        try {
            dispatch({type: ActionEnum.FETCH_GENRES})
            const response = await $host.get("api/genre")
            dispatch({
                type: ActionEnum.FETCH_GENRES_SUCCESS, payload: response.data
            });
        } catch (e) {
            dispatch({
                type: ActionEnum.FETCH_GENRES_ERROR,
                payload: "Произошла ошибка при загрузке жанров"
            });
        }
    }
}

export const setSelectedGenres = (id:number) => {
    return (dispatch: Dispatch<GenresAction>) => {
        dispatch({type:ActionEnum.SET_SELECTED_GENRES, payload: id})
    }
}