import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import BasicRating from "./rating";
import ButtonBasket from "./button_basket";
import Box from "@mui/material/Box";

const Book = ({book}) => {
    return (
        <Box sx={{p:1, width:200}}>
        <Card sx={{ textAlign: "center"}}>
            <CardMedia
                component="img"
                alt={book.name}
                image={book.img}
                sx={{p:1}}
            />
            <CardContent>
                <BasicRating/>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.author}
                </Typography>
                <Typography variant="h7" color="#1976d2">
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
export default Book;