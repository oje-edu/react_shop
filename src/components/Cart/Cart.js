import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './CartStyles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart }) => {
  const styles = useStyles()

  const EmptyCart = () => {
    <Typography variant='subtitle1'>
      Du hast ne leere Schubkarre, es passt noch jede Menge rein.
    </Typography>
  }

  const FilledCart = () => {
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.cartDetails}>
        <Typography variant='h4'>Zwischensumme: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={styles.emptyButton} size='large' type='button' variant='contained' color='secondary'>Schubkarre leeren</Button>
          <Button className={styles.checkoutButton} size='large' type='button' variant='contained' color='primary'>Schubkarre</Button>
        </div>
      </div>
    </>
  }

  if (!cart.line_items) return 'Deine Schubkarre wird zusammengebaut...'

  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography className={styles.title} variant='h3'>
        Deine Schubkarre
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
