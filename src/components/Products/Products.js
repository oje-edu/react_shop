import React from 'react'
import { Grid } from '@material-ui/core'

import { ProductData as products } from '../../constants/constants'

import Product from './Product/Product'
import useStyles from './ProductsStyles'

const Products = () => {
  const styles = useStyles()
  return (
    <main className={styles.content}>
      <div className={styles.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
