import React from 'react';
import Box from "@mui/material/Box";
import Genres from "./genres";

const Sidebar = () => {
    return (
        <Box sx={{width:'sm'}}>
            Sidebar
            <Genres />
        </Box>
    );
}

export default Sidebar;