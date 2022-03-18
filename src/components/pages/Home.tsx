import React, {FC, useEffect} from 'react';
import BasicPagination from "../utils/pagination";
import {useTypedSelector} from "../hooks/reduxHooks";
import Grid from "@mui/material/Grid";
import Sidebar from "../layout/Sidebar";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchBooks} from "../../store/action_creators/book";
import BookItem from "../utils/bookItem";

const Home: FC = () => {
    const dispatch = useDispatch();
    const {books, loading} = useTypedSelector(state => state.book);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(fetchBooks(searchParams));
    }, [searchParams]);

    if (loading) {
        return (
            <div>
                <h6>Подождите, идет загрузка</h6>
            </div>
        )
    }

    return (
        <Grid container>
            <Grid md={3}>
                <Sidebar/>
            </Grid>
            <Grid xs={8} md={8}>
                <BasicPagination/>
                <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 4, sm: 6, md: 20}}>
                    {books ?
                        books.rows.map(book =>
                            <Grid xs={5}>
                                <BookItem
                                    key={book.id}
                                    book={book}/>
                            </Grid>
                        ) : "Ошибка!"
                    }
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Home;
