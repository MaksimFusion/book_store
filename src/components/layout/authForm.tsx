import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import './auth-form.css';
import { loginValidation, passwordValidation } from './validation';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

interface ISignInForm {
    login: string;
    password: string;
}

export const AuthForm: React.FC = () => {

    const { handleSubmit, control } = useForm<ISignInForm>();
    const { errors } = useFormState({
        control
    })
const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data);

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                {isLogin ? "Авторизация" : "Регистрация"}
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="login"
                    rules={loginValidation}
                    render={({ field }) => (
                        <TextField
                            label="Логин"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            error={!!errors.login?.message}
                            helperText={ errors?.login?.message }
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="Пароль"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={ !!errors?.password?.message }
                            helperText={ errors?.password?.message }
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    sx={{
                        marginTop: 2
                    }}
                >
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                </Button>
            </form>

            <div className="auth-form__footer">
                <Typography variant="subtitle1" component="span">
                    {isLogin ?
                        <div>
                            Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся! </NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войти </NavLink>
                        </div>
                    }
                        </Typography>
            </div>
        </div>
    )
}