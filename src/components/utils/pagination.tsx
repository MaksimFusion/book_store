import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import {FC} from "react";
import {useTypedSelector} from "../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

const BasicPagination: FC = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {books} = useTypedSelector((state) => state.book);

    return (
        <Box sx={{p:4}}>
                <Pagination
                    count={books ? Math.ceil(books.count / books.limit) : 0}
                    page={Number(searchParams.get("page")) || 1}
                    onChange={(e, value) => {
                        searchParams.set("page", String(value));
                        setSearchParams(searchParams);
                    }}
                    color="primary" />
        </Box>

    );
}
export default BasicPagination;