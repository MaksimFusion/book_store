import { ListItemText } from '@mui/material';
import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/reduxHooks";


const Genre: FC = () => {
    const {genres} = useTypedSelector(state => state.book)
    return (
        <div>
        {genres.map((genre: any) =>
                <ListItemText key={genre.id} primary={genre.name} />
            )}
        </div>
    )
}

export default Genre;