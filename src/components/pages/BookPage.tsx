import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ButtonBasket from "../utils/button_basket";
import BasicRating from "../utils/rating";
import Feedback from "../utils/feedback";
import InfoBook from "../utils/infoBook";

export default function BookPage() {
    const book = {
        id: 1,
        name: "Три мушкетера",
        author: "Дюма",
        genre: "Приключение",
        price: 211,
        img: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/122719-aleksandr-duma-tri-mushketera.jpg',
        rating: 4
    }
    return (
        <Box sx={{flexGrow: 1, p: 7}}>
            <Grid container spacing={2} columns={16}>
                <Grid xs={8} sx={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="body2" color="#757575">
                        {book.author}
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
                        <BasicRating/>
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