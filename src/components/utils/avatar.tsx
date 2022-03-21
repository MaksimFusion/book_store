import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useTypedSelector} from "../hooks/reduxHooks";
import {FC} from "react";

const ImageAvatars : FC = () => {
   const { user} = useTypedSelector(state => state.auth)
    return (
        <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={
                    user
                        ? user.img
                            ? process.env.REACT_APP_API_URL + user.img
                            : "/static/images/avatar/1.jpg"
                        : ""
                } />
        </Stack>
    );
}
export default ImageAvatars
