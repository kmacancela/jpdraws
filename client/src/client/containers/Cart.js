import React from 'react'
import CartItem from '../components/CartItem'
import CheckoutForm from '../components/CheckoutForm'
import Login from './Login'
import {StripeProvider, Elements} from 'react-stripe-elements';

class Cart extends React.Component {
  render() {
    console.log("inside cart", JSON.parse(localStorage.cart))
    return(
        <div className="row">
          <div className="column">
            { this.props.cart.length !== 0 ?
              <>
              {this.props.cart.map((item, idx) => {
                  return (<CartItem key={idx} item={item} removeFromCart={this.props.removeFromCart} />)
                })
              }
              <h5>Grand Total: ${ this.props.totalAmount(this.props.cart) }</h5>
            </>
              :
              <h1>Your cart is empty!</h1>
            }
          </div>
          <div className="column">
            {(this.props.user) ?
                this.props.cart.length !== 0 ?
                  <>
                  <h1>CHECKOUT</h1>
                  <StripeProvider apiKey="pk_test_DL12VnUcqypUKkIt7N1Qn5U400Nn4SZl50">
                    <Elements>
                      <CheckoutForm getUser={this.props.getUser} cart={this.props.cart} user={this.props.user} totalAmount={this.props.totalAmount}/>
                    </Elements>
                  </StripeProvider>
                  </>
                  :
                  null
              :
              <Login loginAttempt={this.props.loginAttempt} fetchUser={this.props.fetchUser} error={this.props.error} />
            }
          </div>
        </div>
    )
  }
}
export default Cart
