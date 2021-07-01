import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './CartItemSytles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const styles = useStyles()

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity)
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId)

  return (
    <Card className='cart-item'>
      <CardMedia className={styles.media} image={item.media.source} alt={item.name} />
      <CardContent className={styles.cardContent}>
        <Typography variant='h4'>{item.name}</Typography>
        <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={styles.cartActions}>
        <div className={styles.buttons}>
          <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant='contained' type='button' color='secondary' onClick={() => handleRemoveFromCart(item.id)}>Entfernen</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
