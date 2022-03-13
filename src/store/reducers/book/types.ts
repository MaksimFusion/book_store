export type IComment = {
    id: number | null;
    text: string | null;
    bookId: number | null;
    userId: number | null;
    parrentId: number | null;
};

export interface IBook {
    id: number | null;
    name: string | null;
    price: number | null;
    description: string | null;
    img: string | null;
    rating: any;
    authorId: number | null;
    genreId: number | null;
    comment: IComment[];
    author: { id: number; name: string };
    genre: { id: number; name: string };
}

export interface IBookState{
    books: null | {page: number; limit: number };
    loading: boolean;
    error: string | null
}

export enum ActionEnum {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
    SET_BOOK_PAGE = "SET_BOOK_PAGE",
}

export interface FetchBookAction {
    type: ActionEnum.FETCH_BOOKS;
}

export interface FetchBookSuccessAction {
    type: ActionEnum.FETCH_BOOKS_SUCCESS;
    payload: any;
}

export interface FetchBookErrorAction {
    type: ActionEnum.FETCH_BOOKS_ERROR;
    payload: string;
}

export interface SetBookPage {
    type: ActionEnum.SET_BOOK_PAGE;
    payload: number;
}

export type BookAction =
    FetchBookAction |
    FetchBookSuccessAction |
    FetchBookErrorAction |
    SetBookPage
