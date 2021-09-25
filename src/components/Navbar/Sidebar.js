import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    drawer: {
        backgroundColor: '#192133'
    },
});

export default function Sidebar(props) {
    const classes = useStyles();

    const toggleDrawer = () => {
        props.closeDrawer(!props.drawerIsOpen)

    };
    return (
        <div>
            <React.Fragment>
                <Drawer anchor="left" open={props.drawerIsOpen} onClose={toggleDrawer} >
                    <Box sx={{ width: "250px", height:2200, bgcolor: '#192133' }}  role="presentation" onClick={toggleDrawer}>
                        {/* side bar item here */}
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
