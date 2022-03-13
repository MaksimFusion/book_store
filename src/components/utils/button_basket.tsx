import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useDispatch} from "react-redux";

export default function ButtonBasket() {

    return (
        <Stack direction="row" spacing={2} sx={{justifyContent: "center", p:2}}>
            <Button
                variant="contained">Купить</Button>
        </Stack>
    );
}