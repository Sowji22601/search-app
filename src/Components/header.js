import React from 'react';
// import './App.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';

function Header() {

    return (

        <div className="MyApp">

            <Box sx={{ display: 'flex', '& > :not(style)': { p: 2, m: 1, pl: 1 }, }}>


                <Avatar
                    variant="square"
                    alt="sherwin-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    sx={{ width: 100, height: 100 }}
                />

                <Box sx={{ p: 1, display: 'flex' }}>



                    <p>

                        <b> SHERWIN-WILLIAMS</b> <br /> COLLISION <b>CORE</b> <br /> COLOR
                    </p>

                </Box>

                <Box sx={{ flexGrow: 2, pr: "5" }}>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>


                        <Typography variant="h5" pl={90} marginTop={0}>
                            <MenuIcon />

                            Menu - smoke-collisioncore

                        </Typography>
                    </IconButton>

                </Box>

            </Box>
            <Divider width="100%" color="green" />
        </div>



    );
}
export default Header;
