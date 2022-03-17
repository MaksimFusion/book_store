import {ActionEnum, AuthorsAction, IAuthorsState} from "./types";


const initialState: IAuthorsState = {
    authors: [
        {name: "Перумов", id:1},
        {name: "Мартин", id:2},
        {name: "Злотников", id:3},
    ],
    selectedAuthors: { id: null },
    loading: false,
    error: null,
}

export default function authorsReducer(state = initialState, action: AuthorsAction): IAuthorsState {
    switch (action.type) {
        case ActionEnum.FETCH_AUTHORS:
            return {...state, loading: true, error: null, authors: []}
        case ActionEnum.FETCH_AUTHORS_SUCCESS:
            return {...state, loading: false, authors: action.payload}
        case ActionEnum.FETCH_AUTHORS_ERROR:
            return {...state, loading: false, error: action.payload, authors: []}
        case ActionEnum.SET_SELECTED_AUTHORS:
            return { ...state, selectedAuthors: { id: action.payload } };
        default:
            return state;
    }
}