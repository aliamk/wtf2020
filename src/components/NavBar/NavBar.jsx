import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import useStyles from './navbar.styles'
import Logo from '../NavBar/Logo/Logo'

const NavBar = ({ onRouteChange, isSignedIn }) => {

    const classes = useStyles()

    return (
        <>
            <AppBar position="fixed" color="transparent">
                <Toolbar>
                    <Typography variant="h6" align="left"><Logo /></Typography>
                    <div className={classes.grow} />
                    {(isSignedIn)
                        ?
                        <Typography variant="h6" align="right"><p onClick={() => onRouteChange('signin')}>Sign Out</p></Typography>
                        :
                        <Typography variant="h6" align="right"><p onClick={() => onRouteChange('signin')}>Sign In</p></Typography>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
