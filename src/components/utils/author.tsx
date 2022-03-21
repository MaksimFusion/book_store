import {ListItemText} from '@mui/material';
import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchAuthors} from "../../store/action_creators/authors";
import queryString from "query-string";


const Genre: FC = () => {
    const {authors} = useTypedSelector(state => state.authors)
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const [authorId, setAuthorId] = React.useState<(string | null)[]>([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        dispatch(fetchAuthors());

        const parsed = queryString.parse(searchParams.toString(), {
            arrayFormat: "comma",
            parseNumbers: false,
        });
        if (Array.isArray(parsed.author)) {
            setAuthorId([...parsed.author]);
        } else {
            if (parsed.genre) {
                setAuthorId([parsed.author]);
            } else setAuthorId([]);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        searchParams.delete("page");
        if (!authorId.length) {
            searchParams.delete("author");
            setSearchParams(searchParams);
        } else {
            searchParams.set("author", authorId.join());
            setSearchParams(searchParams);
        }
    }, [authorId]);


    return (
        <div>
                {authors.map((author) =>
                    <ListItemText key={author.id} primary={author.name}/>
                )}
        </div>
    )
}

export default Genre;