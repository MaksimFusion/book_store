export type IBook = {
    id: number;
    name: string;
    price: number ;
    description: string ;
    img: string ;
    rating: any[];
    authorId: number;
    genreId: number;
    comment: IComment[];
    author: { id: number; name: string };
    genre: { id: number; name: string };
}

export type IComment = {
    id: number ;
    text: string ;
    bookId: number ;
    userId: number ;
    parrentId: number;
};

export interface IBookState{
    books: null | {rows: any[]; page: number; limit: number, count: number; };
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
