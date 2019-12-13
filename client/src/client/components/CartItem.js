import React, {Fragment} from 'react'

class CartItem extends React.Component {

  handleRemove = () => {
    this.props.removeFromCart(this.props.item)
  }

  render(){
    return (
      <Fragment>
        <figure className="cart-item">
            <img src={ this.props.item.img } alt="" />
            <figcaption>
              { this.props.item.name }
              <br />
              ${ this.props.item.price }
              <br />
              <button onClick={this.handleRemove}>Remove</button>
            </figcaption>
        </figure>
      </Fragment>
    )
  }
}
export default CartItem
