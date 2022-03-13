import React, {FC} from 'react';
import Box from "@mui/material/Box";
import Categories from "../utils/categories";
import RangeSlider from "../utils/RangeSlider";

const Sidebar:FC = () => {
    return (
        <Box>
            <Categories />
            <RangeSlider />
        </Box>
    );
}

export default Sidebar;