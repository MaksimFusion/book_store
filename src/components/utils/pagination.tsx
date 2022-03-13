import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";

export default function BasicPagination() {
    return (
        <Box sx={{p:4}}>
                <Pagination count={10} color="primary" />
        </Box>

    );
}
