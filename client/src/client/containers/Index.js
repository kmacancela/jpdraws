import React from 'react'
import DrawingSpecs from '../components/DrawingSpecs'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

class Index extends React.Component {


  render(){
    // console.log(this.props.specsMethod)
    return(
      <div className="collection">
        <Switch>
          
        </Switch>

        { this.props.specs ?
          <Redirect to='drawing' />
          :
          <Redirect to='' />
         }


      </div>
    )
  }
}
export default withRouter(Index)
