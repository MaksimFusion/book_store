import React, {FC} from 'react';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Product from "../utils/product";
import Button from "@mui/material/Button";
import {useTypedSelector} from "../hooks/reduxHooks";

const Basket = () => {
    const items = useTypedSelector(state => state.auth)
    return (
        <Container>
            <Typography variant="h4" sx={{p: 5}}>Корзина</Typography>
            <Box sx={{p: 3, borderTop: 2, borderColor: "grey.300"}}>
                <Grid container spacing={2}>
                    <Grid xs={8} sx={{
                        borderBottom: 2,
                        borderColor: "grey.300",
                        display: "flex",
                        flexWrap: "wrap"
                    }}>{items.itemsBasket.map((item) =>
                        <Product item={item}/>
                        )}
                    </Grid>
                    <Grid xs={4} sx={{ p: 5}}>
                        <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                            <Box sx={{ backgroundColor: "grey.100"}}>
                                <Typography sx={{p: 1}}>
                                    Товары ({items.itemsBasket.length})
                                </Typography>
                                <Typography sx={{borderTop: 2, p: 1, borderColor: "grey.300"}}>
                                    Общая стоимость:4444
                                </Typography>
                            </Box>
                            <Box sx={{p: 2}}>
                                <Button variant="contained"><Typography sx={{fontSize: 14, p: 1}}>Оформить
                                    заказ</Typography></Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Basket;