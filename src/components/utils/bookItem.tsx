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

interface Props {
    book: IBook;
}

const BookItem: FC <Props> = ({book}) => {

    return (
        <Box sx={{p:1, width:200}}>
        <Card sx={{ textAlign: "center"}}>
            <NavLink to={BOOK_ROUTE + "/" + book.id}>
                <img src={book.img}></img>
            </NavLink>

            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.author}
                </Typography>
                <Typography variant="h6" color="#1976d2">
                    {book.price + "₽"}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <ButtonBasket />
            </ CardActions>
        </Card>
        </Box>
    );
}
export default BookItem;