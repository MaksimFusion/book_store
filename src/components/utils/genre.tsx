import {ListItemText} from '@mui/material';
import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchGenres} from "../../store/action_creators/genre";
import queryString from "query-string";


const Genre: FC = () => {
    const {genres} = useTypedSelector(state => state.genres)
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const [genreId, setGenreId] = React.useState<(string | null)[]>([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        dispatch(fetchGenres());

        const parsed = queryString.parse(searchParams.toString(), {
            arrayFormat: "comma",
            parseNumbers: false,
        });
        if (Array.isArray(parsed.genre)) {
            setGenreId([...parsed.genre]);
        } else {
            if (parsed.genre) {
                setGenreId([parsed.genre]);
            } else setGenreId([]);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        searchParams.delete("page");
        if (!genreId.length) {
            searchParams.delete("genre");
            setSearchParams(searchParams);
        } else {
            searchParams.set("genre", genreId.join());
            setSearchParams(searchParams);
        }
    }, [genreId]);

    return (
        <div>
                    {genres.map((genre) =>
                        <ListItemText key={genre.id} primary={genre.name} />
                    )}
        </div>
    )
}
export default Genre;
