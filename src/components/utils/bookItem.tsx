import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import ButtonBasket from "./button_basket";
import Box from "@mui/material/Box";
import {IBook} from "../../store/reducers/book/types";
import {NavLink} from "react-router-dom";
import {BOOK_ROUTE} from "./consts";
import CardMedia from "@mui/material/CardMedia";

interface Props {
    book: IBook;
}

const BookItem: FC <Props> = ({book}) => {

    return (
        <Box sx={{p:1, }}>
        <Card sx={{ textAlign: "center", width:190, height:400}}>
            <NavLink to={BOOK_ROUTE + "/" + book.id}>
                <CardMedia
                component="img"
                alt={book.name}
                image={process.env.REACT_APP_API_URL + book.img}
                sx={{p: 1}}
            />
            </NavLink>

            <CardContent sx={{p:1}}>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.author.name}
                </Typography>
                <Typography variant="h6" color="#1976d2">
                    {book.price + "₽"}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", }}>
                <ButtonBasket />
            </ CardActions>
        </Card>
        </Box>
    );
}
export default BookItem;

