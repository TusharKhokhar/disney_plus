import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import Sidebar from './Sidebar'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(to bottom, #141b29, #0c111b 300px)',
    },
});

export default function Navbar() {
    const classes = useStyles();
    
    const [drawerIsOpen, setDrawerIsopen]=useState(false)
    const openDrawer = () =>{
        setDrawerIsopen(true)
    }

    const closeDrawer = (val) =>{
        setDrawerIsopen(val)
    }

    return (
        <>
        <Sidebar drawerIsOpen={drawerIsOpen} closeDrawer={closeDrawer} />
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={openDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}