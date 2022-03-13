export type IGenre = {
    id: number;
    name: string;
};

export interface IGenresState {
    genres: IGenre | [] | null;
    loading: boolean;
    selectedGenres: { id: number | null };
    error: null | string;
}

export enum ActionEnum {
    FETCH_GENRES = "FETCH_GENRES",
    FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS",
    FETCH_GENRES_ERROR = "FETCH_GENRES_ERROR",
    SET_SELECTED_GENRES = "SET_SELECTED_GENRES",
}

export interface FetchGenresAction {
    type: ActionEnum.FETCH_GENRES;
}

export interface FetchGenresSuccessAction {
    type: ActionEnum.FETCH_GENRES_SUCCESS;
    payload: any;
}

export interface FetchGenresErrorAction {
    type: ActionEnum.FETCH_GENRES_ERROR;
    payload: string;
}

export interface SetSelectedGenres {
    type: ActionEnum.SET_SELECTED_GENRES;
    payload: number;
}

export type GenresAction =
    FetchGenresAction |
    FetchGenresSuccessAction |
    FetchGenresErrorAction |
    SetSelectedGenres
