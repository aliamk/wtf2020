import React from 'react'
import { AppBar, Typography, Toolbar, Link } from '@material-ui/core';
import useStyles from './navbar.styles'
import Logo from '../NavBar/Logo/Logo'

const NavBar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" color="transparent">
                <Toolbar>

                    <Typography variant="h6" align="left"><Logo />
                        {/*    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            Commerce.js */}
                    </Typography>
                    <div className={classes.grow} />
                    {/* {location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                        )} */}
                    <Typography component={Link} to="/" variant="h6" align="right">Sign In</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
