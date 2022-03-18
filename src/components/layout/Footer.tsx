import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
var uniqid = require('uniqid');

const links = [
    "Мой аккаунт",
    "Контакты",
    "Адреса магазинов",
    "Доставка и оплата"
]

const Footer: FC = () => {
    return (
        <Container>
            <Box sx={{
                borderTop: 2,
                borderColor: "grey.300",
                display: "flex",
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                p: 5
            }}>
                {links.map(item =>
                    <Typography variant="h6" align="center" key={uniqid()}>
                        {item}
                    </Typography>)}

            </Box>
        </Container>
    );
}

export default Footer;