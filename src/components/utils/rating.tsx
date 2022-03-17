import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {FC, useEffect} from "react";
import {IBook} from "../../store/reducers/book/types";
import {useTypedSelector} from "../hooks/reduxHooks";
import {updateRating} from "../../store/action_creators/book";
import {useParams} from "react-router-dom";

interface IBookProps {
    book: IBook;
    getOneBook: () => void
}

const BasicRating: FC<IBookProps> = ({book, getOneBook}) => {
    const [rating, setRating] = React.useState<number | null>(null);
    const {user} = useTypedSelector(state => state.auth);
    const params = useParams();

    const getAndSetRating = () => {
        if (user && book) {
            let userRating = book.rating.find((item: any) => item.userId == user.id);
            if (userRating) {
                setRating(userRating.rate);
            }
        }
    }

    useEffect(() => {
        //display rating on page from book
        getAndSetRating();
    }, [book]);

    useEffect(() => {
        //if rating change reload book
        getOneBook();
    }, [rating])

    const calcRating = () => {
        if (book.rating.length) {
            const calc =
                book.rating.reduce((acc: any, current: any) => acc + current.rate, 0) /
                book.rating.length;
            return `\u{2605}` + calc.toFixed(1);
        }
        return "";
    }

    const onChange = async (
        event: React.SyntheticEvent<Element, Event>, value: number | null) => {
        if (user) {
            const bookId = Number(params.id);
            const userId = user.id;
            const reqData = new FormData();
            reqData.append("bookId", `${bookId}`);
            reqData.append("userId", `${userId}`);
            reqData.append("value", `${value}`);
             await updateRating(reqData);
            setRating(value);
        }
    }

    return (

        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            <Rating
                name="simple-controlled"
                value={+calcRating}
                onChange={onChange}
            />
        </Box>
    )
}
export default BasicRating;