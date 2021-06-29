import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './NavbarStyles'

import logo from '../../assets/img/commerce.jpg'

const Navbar = () => {
  const styles = useStyles()

  return (
    <>
      <AppBar position='fixed' className={styles.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={styles.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height='25px' className={styles.image} />
            T.Emma
          </Typography>
          <div className={styles.grow} />
          <div className={styles.button}>
            <IconButton aria-label='Zeisch den Schubkarren Inhalt' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
