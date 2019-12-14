import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      name: "",
      amount: this.props.totalAmount(this.props.cart)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let { token } = await this.props.stripe.createToken({ name: this.state.name })
      let amount = this.state.amount
      let response = await fetch('http://localhost:9000/charge', {
        method: 'POST',
        headers: {
          "Content-Type": "text/plain"
        },
        body: token.id + "&" + amount
      })
      if (response.ok) {
        this.setState({complete: true})
        this.props.cart.forEach((item) => {
          let user_id = this.props.user.id
          let drawing_id = item.id
          fetch('/api/v1/transactions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              user_id,
              drawing_id
            })
          })
          .then(res => res.json())
          .then(data => {
            this.props.getUser()
          })
        })
      };
      // redirect, clear inputs, thank alert
    } catch (event) {
      throw event
    }
  }

  render(){
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.name }
            name="name"
            placeholder="Full Name"
            onChange={ this.handleChange }
          />
        <CardElement className="cardElement" />
          <input type="submit" value="Purchase" className="btn-item"/>
        </form>
      </main>

    )
  }
}

export default injectStripe(CheckoutForm);
