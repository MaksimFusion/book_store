import React from 'react';
import {Container, Box, TextField, ListItem} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useTypedSelector} from "../hooks/reduxHooks";

const Profile = () => {
    const {...user} = useTypedSelector(state => state.auth.user);
    const item = [user.name, user.DOB, user.email, "Пароль"]
    return (
        <Container sx={{maxWidth: "lg", p: 10}}>
            <Box sx={{display: {xs: 'flex', alignItems: 'center'}}}>
                <Avatar sx={{width: 130, height: 130}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <Box sx={{p: 5}}>
                    <Typography sx={{display: {xs: 'flex'}, fontSize: 20}}>
                        {user.name}
                    </Typography>
                    <Typography>
                        {user.email}
                    </Typography>
                </Box>
            </Box>
            <Grid item xs={12} md={6}>
                <ListItem>
                    <Box sx={{display:"flex",flexDirection:"column", p: 3}}>
                        {item.map(item => <TextField
                            sx={{mt: 3, mb: 1}}
                            defaultValue={item}
                            variant="standard"
                        />)}

                    </Box>
                </ListItem>
            </Grid>
        </Container>
    );
};

export default Profile;