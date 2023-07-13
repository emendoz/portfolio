import {Fragment} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const nameIcon = "EGM<";
const pages = ['Home', 'Portfolio', 'About', 'Contact'];

export default function TopBanner(props) {

return (
    <Fragment sx={{ flexGrow: 1 }}>
      <AppBar position="static"
              sx= {{
                backgroundColor: 'rgb(0,0,0)',
                border: 1, 
                borderColor: 'rgb(135,255,116)'
              }}
      >
        <Toolbar>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1, mr: 2}}
          style={{ fontFamily: "Menlo", color: "rgb(135,255,116)" }}>
            {nameIcon}
          </Typography>

          <Box>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ fontFamily: "Menlo", color: "rgb(135,255,116)", mr: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
