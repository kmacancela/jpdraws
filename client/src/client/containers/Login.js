import React from 'react'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {

  render() {
    console.log("inside login", this.props)
    return (
      <div className="div-form">
        <form onSubmit={this.props.fetchUser}>
          <h1>LOG IN</h1>
            { this.props.error ?
              <>
                <h2 className="error">Error! Try again.</h2>
              </>
              :
              null
            }
          <label>
            Username:
            <input onChange={this.props.loginAttempt} type="text" name="username" />
          </label>
          <label>
            Password:
            <input onChange={this.props.loginAttempt} type="password" name="password" />
          </label>
          <br />
          <input type="submit" value="Log In" className="btn-item" />
          <br/>
          <NavLink to="/signup"  className="btn-item">Sign Up</NavLink>
          <br/>
          <NavLink to="/">Return to HomePage</NavLink>
        </form>
      </div>
    )
  }
}
export default Login
