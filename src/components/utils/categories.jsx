import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Genre from "./genre";
import Author from "./author";

export default function Categories() {
    return (
        <Box>
            <Grid container>
                <Grid>
                    <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                        Категории
                    </Typography>
                    <Typography color="#757575">
                        Жанры
                    </Typography>
                    <Genre/>
                    <Typography color="#757575">
                        Авторы
                    </Typography>
                    <Author />
                </Grid>

            </Grid>

        </Box>
    );
}
