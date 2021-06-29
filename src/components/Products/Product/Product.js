import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './ProductStyles'

const Product = ({ product }) => {
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      <CardMedia className={styles.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton aria-label='Zum Schubkarren hinzufügen'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
