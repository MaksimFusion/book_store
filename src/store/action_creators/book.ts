import {Dispatch} from "redux";
import {ActionEnum, BookAction} from "../reducers/book/types";
import {$host} from "./API";


export const fetchBooks = (searchParams: URLSearchParams) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({type: ActionEnum.FETCH_BOOKS})
            const response = await $host.get("api/book")
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
export const updateRating = async (reqData: any) => {
    const {data} = await $host.post("api/book/rating", reqData)
    return data
}

export const fetchOneBook = async (id: string) => {
    const response = await $host.get("api/book/" + id);
    return response.data;
};
