import React, {FC} from 'react';
import BasicPagination from "../layout/pagination";
import {Container} from "@mui/material";

const Home: FC = () => {
    return (
        <Container>
            <BasicPagination />
        </Container>
    );
}

export default Home;
