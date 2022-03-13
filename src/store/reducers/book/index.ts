import {ActionEnum, BookAction, IBookState} from "./types";

const initialState: IBookState = {
    books: null,
    loading: false,
    error: null,
}
export default function bookReducer(state = initialState, action: BookAction): IBookState {
    switch (action.type) {
        case ActionEnum.FETCH_BOOKS:
            return {...state, loading: true, error: null, books: null}
        case ActionEnum.FETCH_BOOKS_SUCCESS:
            return {...state, loading: false, books: action.payload}
        case ActionEnum.FETCH_BOOKS_ERROR:
            return {...state, loading: false, error: action.payload, books: null}
        default:
            return state;
    }
}