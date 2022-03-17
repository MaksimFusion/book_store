import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm, Controller, useFormState} from "react-hook-form";
import './auth-form.css';
import {loginValidation, passwordValidation} from './validation';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./consts";
import {login, registration, setAuth, setUser} from "../../store/action_creators/auth";
import {useDispatch} from "react-redux";

interface ISignInForm {
    email: string;
    password: string;
}

export const AuthForm: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    })
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try{
            let data:any;
            if (isLogin) {
                 data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            dispatch(setUser(data))
            dispatch(setAuth(true))
            navigate(HOME_ROUTE)
        } catch (e) {

        }
        }


    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                {isLogin ? "Авторизация" : "Регистрация"}
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(click)}>
                <Controller
                    control={control}
                    name="email"
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            error={!!errors.email?.message}
                            helperText={errors?.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({field}) => (
                        <TextField
                            label="Пароль"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={!!errors?.password?.message}
                            helperText={errors?.password?.message}
                        />
                    )}
                />
                <Button
                    onClick={click}
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
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