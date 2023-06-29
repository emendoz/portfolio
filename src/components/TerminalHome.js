import {Fragment} from 'react';
import Box from '@mui/material/Box';

export default function TerminalHome(props) {


return (
    <Fragment sx={{ flexGrow: 1 }}>
        <Box
              sx= {{
                height: 773,
                width: 629,
                backgroundColor: 'rgb(26,26,26)',
                borderRadius: 10
              }}
        >
            <Box 
                sx= {{
                    height: 46,
                    width: 629,
                    backgroundColor: 'rgb(64,64,64)',
                    borderRadius: 2,
                    
                }}
            >
                <Box
                    sx= {{
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(218,83,83)',
                        borderRadius: 10
                    }}
                />
                <Box
                    sx= {{
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(218,180,83)',
                        borderRadius: 10
                    }}
                />
                <Box
                    sx= {{
                        height: 25,
                        width: 25,
                        backgroundColor: 'rgb(94,218,83)',
                        borderRadius: 10
                    }}
                />
            </Box>
        </Box>
    </Fragment>
    );
}