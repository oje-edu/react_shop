import React, { useState, useEffect } from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './CheckoutStyles'

const steps = ['Lieferanschrift', 'Zahlungsinformation']

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const styles = useStyles()
  const history = useHistory()

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

          setCheckoutToken(token)
        } catch {
          if (activeStep !== steps.length) history.push('/')
        }
      }

      generateToken()
    }
  }, [cart])

  const next = (data) => {
    setShippingData(data)

    nextStep()
  }

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Danke für Ihre Bestellung, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={styles.divider} />
        <Typography variant="subtitle2">Bestell Nr.: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Zur Startseite</Button>
    </>
  ) : (
    <div className={styles.spinner}>
      <CircularProgress />
    </div>
  ))

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant='h5'>Fehler: {error}</Typography>
        <br />
        <Button component={Link} variant='outlined' type='button' to='/'>Startseite</Button>
      </>
    )
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

  return (
    <>
      <CssBaseline />
      <div className={styles.toolbar} />
      <main className={styles.layout}>
        <Paper className={styles.paper}>
          <Typography variant='h4' align='center'>Zur Kasse</Typography>
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
