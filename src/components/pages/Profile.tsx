import React from 'react';
import {Container, Box, TextField, ListItem} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useTypedSelector} from "../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {RootState} from "../../store";
import {setUser, updateUser} from "../../store/action_creators/auth";
import {SubmitHandler, useForm} from "react-hook-form";

interface DataChangeInputs {
    name: string;
    files: FileList;
}

const Profile = () => {
    const { user} = useTypedSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const {
        register: registerData,
        setValue: setValueData,
        handleSubmit: handleSubmitData,
        reset: resetData,
        formState: { errors: errorsData, isValid: isValidData },
    } = useForm<DataChangeInputs>({ mode: "onBlur" });

    const onSubmitDataChange: SubmitHandler<DataChangeInputs> = async (data) => {
            const { name, files } = data;
            const responseUser = await updateUser(name, files[0]);
            dispatch(setUser(responseUser));

    };

    return (
        <Container sx={{maxWidth: "lg", p: 10}}>
            <form key={1} onSubmit={handleSubmitData(onSubmitDataChange)}>
            <Grid item xs={12} md={6}>
                <ListItem>
                    <Box sx={{display:"flex",flexDirection:"column", p: 3}}>

                            <Avatar sx={{width: 130, height: 130}} alt="Remy Sharp" src={
                                user
                                    ? user.img
                                        ? process.env.REACT_APP_API_URL + user.img
                                        : "/static/images/avatar/1.jpg"
                                    : ""
                            }/>
                        <input {...registerData("files")} type="file" />
                        <label>Name:</label>
                        <input
                            defaultValue={user ? user.name : ""}
                            {...registerData("name")}
                        ></input>
                        <input type="submit" value={"change"}></input>
                    </Box>

                </ListItem>
            </Grid>
            </ form>
        </Container>
    );
};

export default Profile;