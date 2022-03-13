import React, {FC} from 'react';
import {Container} from "@mui/material";
import {AuthForm} from "../utils/authForm";


const Auth: FC = () => {
    return (
        <Container sx={{width: window.innerHeight}}>
            <AuthForm />
        </Container>
    );
};

export default Auth;