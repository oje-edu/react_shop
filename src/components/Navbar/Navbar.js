import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './NavbarStyles'

import logo from '../../assets/img/commerce.jpg'

const Navbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const styles = useStyles()
  const location = useLocation()

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
          <Badge badgeContent={totalItems} color='secondary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <AppBar position='fixed' className={styles.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={styles.title} color='inherit'>
            <img src={logo} alt='Tante Emma Logo' height='25px' className={styles.image} />
            T.Emma
          </Typography>
          <div className={styles.grow} />
          {location.pathname === '/' && (
            <div className={styles.button}>
              <IconButton component={Link} to='/cart' aria-label='Zeisch den Schubkarren Inhalt' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>)}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  )
}

export default Navbar
