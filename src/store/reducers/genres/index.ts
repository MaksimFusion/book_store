import {ActionEnum, GenresAction, IGenresState} from "./types";


const initialState: IGenresState = {
    genres: [
    ],
    selectedGenres: { id: null },
    loading: false,
    error: null,
}

export default function genresReducer(state = initialState, action: GenresAction): IGenresState {
    switch (action.type) {
        case ActionEnum.FETCH_GENRES:
            return {...state, loading: true, error: null, genres: []}
        case ActionEnum.FETCH_GENRES_SUCCESS:
            return {...state, loading: false, genres: action.payload}
        case ActionEnum.FETCH_GENRES_ERROR:
            return {...state, loading: false, error: action.payload, genres: []}
        case ActionEnum.SET_SELECTED_GENRES:
            return { ...state, selectedGenres: { id: action.payload } };
        default:
            return state;
    }
}