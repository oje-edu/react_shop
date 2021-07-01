import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import CartItem from './CartItem/CartItem'
import useStyles from './CartStyles'

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const styles = useStyles()

  const handleEmptyCart = () => onEmptyCart()

  const renderEmptyCart = () => (
    <Typography variant='subtitle1'>Deine Schubkarre ist leer.
      <Link className={styles.link} to='/'> Etwas einkaufen und hinzufügen.</Link>!
    </Typography>
  )

  if (!cart.line_items) return 'Lade...'

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.cardDetails}>
        <Typography variant='h4'>Zwischensumme: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={styles.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Schubkarre leeren</Button>
          <Button className={styles.checkoutButton} component={Link} to='/checkout' size='large' type='button' variant='contained' color='primary'>Zur Kasse</Button>
        </div>
      </div>
    </>
  )

  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography className={styles.title} variant='h3' gutterBottom>Deine Schubkarre</Typography>
      {
        !cart.line_items.length ? renderEmptyCart() : renderCart()
      }
    </Container>
  )
}

export default Cart
