import React from 'react'
import Header from './Header'
import Cart from './Cart'

export default class DisplayCart extends React.Component {

  render(){
    return(
      <>
        <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
        <Cart getUser={this.props.getUser} cart={this.props.cart} user={this.props.user} loginAttempt={this.props.loginAttempt} fetchUser={this.props.fetchUser} totalAmount={this.props.totalAmount} removeFromCart={this.props.removeFromCart} error={this.props.error} />
      </>
    )
  }
}
