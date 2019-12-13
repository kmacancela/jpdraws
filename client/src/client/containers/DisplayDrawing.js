import React from 'react'
import Header from './Header'
import DrawingSpecs from '../components/DrawingSpecs'

export default class DisplayCart extends React.Component {

  render(){
    return(
      <>
        <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
        <DrawingSpecs drawing={ this.props.specs } addToCart={this.props.addToCart} />
      </>
    )
  }
}
