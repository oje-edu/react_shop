import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './CartItemSytles'

const CartItem = ({ item }) => {
  const styles = useStyles()

  return (
    <Card>
      <CardMedia className={styles.media} image={item.media.source} alt={item.name} />
      <CardContent className={styles.cardContent}>
        <Typography variant='h4'>{item.name}</Typography>
        <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={styles.cartActions}>
        <div className={styles.buttons}>
          <Button type='button' size='small'>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type='button' size='small'>+</Button>
        </div>
        <Button variant='contained' type='button' color='secondary'>Entfernen</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
