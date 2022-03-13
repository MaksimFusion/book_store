export type IAuthor = {
    id: number;
    name: string;
};

export interface IAuthorsState {
    authors: IAuthor | [] | null;
    loading: boolean;
    selectedAuthors: { id: number | null };
    error: null | string;
}

export enum ActionEnum {
    FETCH_AUTHORS = "FETCH_AUTHORS",
    FETCH_AUTHORS_SUCCESS = "FETCH_AUTHORS_SUCCESS",
    FETCH_AUTHORS_ERROR = "FETCH_AUTHORS_ERROR",
    SET_SELECTED_AUTHORS = "SET_SELECTED_AUTHORS",
}

export interface FetchAuthorsAction {
    type: ActionEnum.FETCH_AUTHORS;
}

export interface FetchAuthorsSuccessAction {
    type: ActionEnum.FETCH_AUTHORS_SUCCESS;
    payload: any;
}

export interface FetchAuthorsErrorAction {
    type: ActionEnum.FETCH_AUTHORS_ERROR;
    payload: string;
}

export interface SetSelectedAuthors {
    type: ActionEnum.SET_SELECTED_AUTHORS;
    payload: number;
}

export type AuthorsAction =
    FetchAuthorsAction |
    FetchAuthorsSuccessAction |
    FetchAuthorsErrorAction |
    SetSelectedAuthors
