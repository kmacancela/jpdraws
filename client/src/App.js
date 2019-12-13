import React from 'react'
import './App.css';
import HomePage from './client/containers/HomePage'
import DisplayCart from './client/containers/DisplayCart'
import DisplayDrawing from './client/containers/DisplayDrawing'
import drawings from './drawings'
import Login from './client/containers/Login'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Signup from './client/containers/Signup'
import OrderHistory from './client/components/OrderHistory'

const DEFAULT_STATE = {
  token: null,
  user_id: '',
  user: null,
  drawings: drawings,
  specs: null,
  cart: [],
  error: false
}

class App extends React.Component {
  state= DEFAULT_STATE

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (localStorage.token){
      this.setState({
        token: localStorage.token,
        user_id: localStorage.user_id,
        user
      })
    }
  }

  specsMethod = (drawing) => {
    this.setState({
      specs: drawing
    })
  }

  addToCart = (drawing, material) => {
    this.setState({
      cart: [...this.state.cart, drawing],
      specs: null
    })
  }

  resetSpecs = () => {
    this.setState({
      specs: null
    })
  }

  getToken = (event) => {
    let username = event.target.username.value
    let password = event.target.password.value
    console.log("EVENT", username, password)
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log("data", data)
        if (data.errors) {
          this.setState({
            error: true
          })
        } else {
          localStorage.token = data.token
          localStorage.user_id = data.user_id
          this.setState({
            token: data.token,
            user_id: data.user_id
          })
        }
      })
  }

  totalAmount = (cart) => {
    if (cart.length === 0) return 0

    let prices = cart.map((item) => {return item.price})
    let total = prices.reduce((total, num) => {return total + num})
    return total
  }

  getUser = () => {
    return fetch(`http://localhost:3000/users/${this.state.user_id}`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.state.token
      }
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user))
      this.setState({
        user,
        drawings
      })
    })
  }

  fetchUser = (event) => {
    event.preventDefault()
    this.getToken(event)
      .then(() => {
        this.getUser()
    })
  }

  newUser = (event) => {
    let username = event.target.username.value
    let password = event.target.password.value
    return fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        first_name: event.target.first_name.value,
        last_name:event.target.last_name.value,
        username,
        password
      })
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        username,
        password
      })
      // console.log(data, "data")
      this.fetchUser(event)
    })
  }

  createUser = (event) => {
    event.preventDefault()
    this.newUser(event)
    .then(
    this.getToken())
      .then(() => {
        this.getUser()
    })
  }

  logOut = () => {
    localStorage.token = null
    localStorage.user_id = null
    localStorage.user = null
    this.setState(
      DEFAULT_STATE
    )
  }

  removeFromCart = (item) => {
    let newCart = this.state.cart.filter(data => {
      return data !== item
    })
    this.setState({
      cart: newCart
    })
  }

  render() {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))

    return (
        <div className="App">
          <Switch>
            <Route exact path='/' render={(props) => <HomePage resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart}/>} />

            <Route path='/cart' render={(props) => <DisplayCart resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} loginAttempt={this.loginAttempt} fetchUser={this.fetchUser} totalAmount={this.totalAmount} getUser={this.getUser} removeFromCart={this.removeFromCart} error={this.state.error} />} />

            <Route path='/drawing' render={(props) => <DisplayDrawing resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart} />} />

            <Route path='/signup' render={(props) => <Signup createUser={ this.createUser }/>} />

            <Route path='/login' render={(props) => <Login loginAttempt={this.loginAttempt} fetchUser={this.fetchUser}
            error={this.state.error} />} />

            <Route path='/orderhistory' render={(props) => <OrderHistory resetSpecs={this.resetSpecs} specs={this.state.specs} specsMethod={this.specsMethod} logOut={this.logOut} user={this.state.user} drawings={this.state.drawings} cart={this.state.cart} addToCart={this.addToCart}/>} />} />

            <Redirect to='' />
          </Switch>



           {this.state.user ?
           <Redirect to='' />
            :
            null
            }

          { this.state.specs ?
            <Redirect to='drawing' />
            :
            <Redirect to='' />
           }

      </div>
    )
  }
}

export default withRouter(App)
