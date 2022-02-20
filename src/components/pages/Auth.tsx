import React, {FC} from 'react';
import {Container} from "@mui/material";
import {AuthForm} from "../layout/authForm";


const Auth: FC = () => {
    return (
        <Container sx={{width: window.innerHeight - 54}}>
            <AuthForm />
        </Container>
    );
};

export default Auth;