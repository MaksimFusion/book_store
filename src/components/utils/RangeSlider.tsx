import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
import {FC, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

const minPrice = 0;
const maxPrice = 1000;
let min = 0;
let max = 1000;
const stepPrice = 10;
const minDistance = 100;

const RangeSlider: FC = () => {

    const [value, setValue] = React.useState<number[]>([min, max]);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("min") && searchParams.get("max")) {
            min = Number(searchParams.get("min"));
            max = Number(searchParams.get("max"));
            setValue([min, max]);
        }
    }, []);

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

const handleCommitted = () => {
    if (value[0] === minPrice && value[1] === maxPrice) {
        searchParams.delete("min");
        searchParams.delete("max");
    }
    searchParams.set("min", `${value[0]}`);
    searchParams.set("max", `${value[1]}`);
    searchParams.delete("page");
    setSearchParams(searchParams);
};

    return (

        <Box sx={{width: 200}}>
            <Box>
                <Typography color="#757575" sx={{mt: 4, mb: 2}}>
                    ЦЕНА
                </Typography>

            </Box>
            <Slider
                getAriaLabel={() => 'price range'}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleCommitted}
                min={minPrice}
                max={maxPrice}
                step={stepPrice}
                disableSwap
            />
        </Box>
    );
}

export default RangeSlider