import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

import { browserHistory } from 'react-router'

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      browserHistory.push('/purchase')
    });
  }
  render() {
     return (
       // ...
       <StripeCheckout
  name="Cheap Baking Mats Co."
  description="Cheap Baking Mats"
  image=""
  ComponentClass="div"
  panelLabel=""
  amount={995}
  currency="AUD"
  stripeKey="pk_test_NVw9CdwviRFSyytLzuitGNvw"
  locale="en"
  email="siliconebakingmatsau@gmail.com"
  shippingAddress={true}
  billingAddress={false}
  zipCode={false}
  alipay
  bitcoin
  allowRememberMe
  token={this.onToken}
  reconfigureOnUpdate={false}
  triggerEvent="onClick"
  >
  <button className="btn btn-danger">
  Buy Now!
  </button>
</StripeCheckout>
     )
   }
 }
