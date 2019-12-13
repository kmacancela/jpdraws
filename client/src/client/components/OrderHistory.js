import React, {Fragment} from 'react'
import Header from '../containers/Header'
import Drawing from './Drawing'

export default class OrderHistory extends React.Component {
  render() {
    return (
      <>
      <Header resetSpecs={this.props.resetSpecs} specs={this.props.specs} specsMethod={this.props.specsMethod} logOut={this.props.logOut} user={this.props.user}/>
      <div>
        <h1>Order History</h1>
        {this.props.user.transactions.map((order, idx) => {
            return (
              <Fragment>
                <figure className="cart-item">
                    <img src={ order.drawing.img } alt="" />
                    <figcaption>
                      { order.drawing.name }
                      <br />
                      ${ order.drawing.price }
                    </figcaption>
                </figure>
              </Fragment>
            )
          })
        }
      </div>
      </>
    )
  }
}
