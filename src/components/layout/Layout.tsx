import React, {FC} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "@mui/material";

const Layout: FC = ({children}) => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg" >
            {children}
            </Container>
            <Footer/>
        </>
    );
}

export default Layout;