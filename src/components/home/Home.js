import {Fragment} from 'react';
import TopBanner from '../TopBanner';
import Box from '@mui/material/Box';
import TerminalHome from './TerminalHome';


export default function HomePage(props) {

return (
        <Fragment sx={{ flexGrow: 1 }}>
            <TopBanner />
            <Box display="flex"
              sx= {{
                height: '100vh',
                backgroundColor: 'rgb(0,0,0)',
                border: 1, 
                borderColor: 'rgb(135,255,116)',
                justifyContent: "center"
              }}
            >
                <TerminalHome />
            </Box>
        </Fragment>
    );
}