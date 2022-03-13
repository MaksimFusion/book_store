import React from 'react';
import BasicPagination from "../utils/pagination";
import Book from "../utils/book";
import {useTypedSelector} from "../hooks/reduxHooks";
import Grid from "@mui/material/Grid";
import Sidebar from "../layout/Sidebar";

const Home = () => {
    const {book} = useTypedSelector(state => state.book);
    return (
        <Grid container>
            <Grid md={3}>
                <Sidebar/>
            </Grid>
            <Grid xs={8} md={8}>
                    <BasicPagination/>
                <Grid container spacing={{xs: 1, md: 3}} columns={{xs: 4, sm: 6, md: 20}}>
                    {book.map((book) =>
                        <Grid xs={5}>
                            <Book
                                key={book.id}
                                book={book}/>
                        </Grid>
                    )}

                </Grid>
            </Grid>
        </Grid>

    );
}

export default Home;
