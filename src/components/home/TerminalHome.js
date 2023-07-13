import {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function TerminalHome(props) {

    const NameTag = ({value}) => {
        return  <Typography variant="h5" sx= {{ fontFamily: "Menlo", color: "rgb(135,255,116)", ml: 4, mt: 2}}>
           erikagmendoza $ {value}
        </Typography>
    };

return (
    <Fragment sx={{ flexGrow: 1 }}>
        <Box
              sx= {{
                height: 378,
                width: 1385,
                display: 'flex',
                m: 2,
                backgroundColor: 'rgb(26,26,26)',
                borderRadius: 10
              }}
        >
        <Grid>
            <Box display="flex"
                sx= {{
                    height: 46,
                    width: 1385,
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
                sx= {{ fontFamily: "Menlo", color: "white", m: 1, ml: 45 }}>
                    Home -- -bash -- 80x24
                </Typography>
            </Box>
            <NameTag value={"hello world :D"} />
            <NameTag value={"hello world :D"} />
            <NameTag value={"hello world :D"} />
            <NameTag value={"hello world :D"} />
        </Grid>
        </Box>
    </Fragment>
    );
}