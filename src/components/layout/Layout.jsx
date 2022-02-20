import React, {FC} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {Container, Grid} from "@mui/material";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg" >
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
            <Sidebar/>
                </Grid>
                <Grid item xs={6} md={8}>
            {children}
                </Grid>
                <Grid >
                </Grid>
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default Layout;