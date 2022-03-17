import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const characteristic = ["Издательство", "Язык", "Год издания","Количество страниц"]

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function InfoBook() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Описание" {...a11yProps(0)} />
                    <Tab label="Характеристики" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{m: 1, textAlign: 'left'}}>
                    Известнейший историко-приключенческий роман из эпохи Людовика XIII знаменитого французского
                    писателя-классика Александра Дюма-отца входит в золотой фонд мировой литературы.
                    Четверо неразлучных друзей – д'Артаньян, Атос, Портос и Арамис, погружённые во все дворцовые
                    тайны и интриги сильных мира сего,
                    под девизом «Один за всех и все за одного» всегда выходят победителями, спасая честь королевы
                    Анны Австрийской и противостоя многочисленным козням кардинала Ришелье.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container sx={{display:"flex", flexDirection:"column",  alignItems: 'flex-start'}}>
                {characteristic.map(item =>
                    <Typography sx={{p:1}}>{item}:</Typography>
                )}

                </Container>
            </TabPanel>
        </Box>
    );
}