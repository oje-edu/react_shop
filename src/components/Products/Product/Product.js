import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './ProductStyles'

const Product = ({ product, onAddToCart }) => {
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      <CardMedia className={styles.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
      </CardContent>
      <CardActions disableSpacing className={styles.cartActions}>
        <IconButton aria-label='Zum Schubkarren hinzufügen' onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
