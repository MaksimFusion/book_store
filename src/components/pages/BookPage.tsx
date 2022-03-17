import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Feedback from "../utils/feedback";
import {useParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {fetchOneBook} from "../../store/action_creators/book";
import {IBook} from "../../store/reducers/book/types";
import CardMedia from "@mui/material/CardMedia";
import ButtonBasket from "../utils/button_basket";
import BasicRating from "../utils/rating";
import InfoBook from "../utils/infoBook";


const BookPage: FC = () => {
    const params = useParams();
    const [book, setBook] = useState<null | IBook>(null);

    const getOneBook = () => {
        if (params.id) {
            fetchOneBook(params.id)
                .then((response) => {
                    setBook(response);
                })
                .catch((err) => alert(err))
                .finally(() => {});
        }
    };

    useEffect(() => {
        getOneBook();
    }, []);


    if(!book)
        return (
            <div>
                <h5>Oшибка</h5>
            </div>
        )
    return (
        <Box sx={{flexGrow: 1, p: 7}}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8} sx={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography variant="body2" color="#757575">
                            {book.author.name}
                        </Typography>
                        <Typography variant="h5">
                            {book.name}
                        </Typography>
                    </Box>
                    <Box sx={{maxWidth: 200}}>
                        <CardMedia
                            component="img"
                            alt={book.name}
                            max-height="100"
                            image={book.img}
                            sx={{p: 1}}
                        />
                        <Typography variant="h6" color="#1976d2" sx={{textAlign: "center"}}>
                            {book.price + "₽"}
                        </Typography>
                        <Box>
                            <ButtonBasket/>
                        </Box>
                    </Box>

                </Grid>
                <Grid xs={8} sx={{textAlign: "center"}}>
                    Рэйтинг книги:
                    <Box sx={{p: 1}}>
                        <BasicRating book={book} getOneBook={getOneBook}/>
                    </Box>
                    <InfoBook />
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 2, borderTop: 1}}>
                <Typography variant="h5">
                    Отзывы
                </Typography>
                <Typography sx={{p: 1}}>
                    + Оставить отзыв
                </Typography>
            </Box>
            <Box>
                <Feedback/>
            </Box>

        </Box>
    );
}
export default BookPage;