import {Fragment} from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function TerminalAbout(props) {


return (
    <Fragment sx={{ flexGrow: 1 }}>
        <Box
              sx= {{
                height: 773,
                width: 629,
                display: 'flex',
                alignItems: 'flex-start',
                m: 2,
                backgroundColor: 'rgb(26,26,26)',
                borderRadius: 10
              }}
        >
            <Box display="flex"
                sx= {{
                    height: 46,
                    width: 629,
                    backgroundColor: 'rgb(64,64,64)',
                    borderRadius: 3
                }}
            >
                <Box 
                    sx= {{
                        m: 1.5,
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(218,83,83)',
                        borderRadius: 10
                    }}
                />
                <Box
                    sx= {{
                        m: 1.5,
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(218,180,83)',
                        borderRadius: 10
                    }}
                />
                <Box
                    sx= {{
                        m: 1.5,
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(94,218,83)',
                        borderRadius: 10
                    }}
                />
                <Typography variant="h6"
                sx= {{ fontFamily: "Menlo", color: "white", m: 1, ml: 10 }}>
                    About -- -bash -- 80x24
                </Typography>
            </Box>
        </Box>
    </Fragment>
    );
}