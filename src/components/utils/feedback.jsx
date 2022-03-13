import React from 'react';
import Avatar from "@mui/material/Avatar";
import {useTypedSelector} from "../hooks/reduxHooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Feedback = () => {
    const {img, name} = useTypedSelector(state => state.auth)
    return (
        <Box sx={{display: 'inline-flex'}}>
            <Avatar alt="Remy Sharp"
                    src={img}
                    sx={{width: 56, height: 56}}/>
            <Typography variant="h6" sx={{p: 1}}>
                {name}
                <Typography variant="body2" color="text.secondary">
                    2.03.2222
                </Typography>

            </Typography>
            <Typography variant="body2" sx={{p:2}}>
                Много говорить об этом произведении не нужно одно название говорит само за себя, впервые этим
                произведение как и большинство познакомился благодаря кинематографу
                и сразу захотел прочитать книжку, а взяв её в руки был шокирован её размером и это было счастье, это
                обозначало что в ней скрыта просто неимоверное количество
                приключений героев, которое не попали и не могли попасть все в один фильм. Такой шедевр создать мог
                только Дюма и не кто другой, многие пытались повторить успех
                этого романа, но мало у кого получилось хоть немного приблизиться.Все-таки я не знаю ни одного человека,
                как и вы, чтобы не разу хотя бы не слышал а трех мушкетерах.
            </Typography>
        </Box>
    );
};

export default Feedback;