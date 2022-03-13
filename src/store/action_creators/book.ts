import {Dispatch} from "redux";
import {ActionEnum, BookAction} from "../reducers/book/types";
import {$host} from "./API";


export const fetchBooks = (searchParams: URLSearchParams) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({type: ActionEnum.FETCH_BOOKS})
            let url = "api/book/?" + searchParams.toString()
            const response = await $host.get("api/book", {
                params: Object.fromEntries(searchParams),
            })
                dispatch({
                             type: ActionEnum.FETCH_BOOKS_SUCCESS, payload: response.data
                         });
        } catch (e) {
            dispatch({
                type: ActionEnum.FETCH_BOOKS_ERROR,
                payload: "Произошла ошибка при загрузке книг"
            });
        }
    }
}
