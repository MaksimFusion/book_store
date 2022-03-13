import { ListItemText } from '@mui/material';
import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/reduxHooks";


const Author: FC = () => {
    const {authors} = useTypedSelector(state => state.book)
    return (
        <div>
            {authors.map((author: any) =>
                <ListItemText key={author.id} primary={author.name} />
            )}
        </div>
    )
}

export default Author;