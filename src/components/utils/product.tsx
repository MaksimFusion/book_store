import React from 'react';
import {Checkbox, Container} from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./product.css"

const Product = () => {
    const book = {
        id: 1,
        name: "Три мушкетера",
        author: "Дюма",
        genre: "Приключение",
        price: 211,
        img: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/122719-aleksandr-duma-tri-mushketera.jpg',
        rating: 4
    }
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
    return (
        <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </Box>
            <CardMedia
                sx={{p: 1, width: 120}}
                component="img"
                alt={book.name}
                image={book.img}
            />
            <Typography variant="h6">
                {book.name}
                <Typography color="text.secondary">
                    {book.author}
                </Typography>
            </Typography>
            <Typography variant="h5" color="#1976d2">
                {book.price + "₽"}
            </Typography>
            <Typography variant="h5">
                <Box className="number">
                    <button className="number-minus" type="button">-
                    </button>
                        <input type="number" min="0" value="1" />
                    <button className="number-plus" type="button">+
                    </button>
                </Box>
            </Typography>

        </Container>
    );
};

export default Product;